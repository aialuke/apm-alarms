# frozen_string_literal: true

module APM
  class Screen < Jekyll::Page
    def initialize(site, dir, layout, data, content = "")
      @site = site
      @base = site.source
      @dir = dir
      @name = "index.html"
      process(@name)
      @data = data.merge("layout" => layout)
      @content = content
    end
  end

  class Screens < Jekyll::Generator
    def generate(site)
      brands = site.data["brands"] || []
      map = site.data["topic_map"] || {}
      units = map["units"] || {}
      topics = map["topics"] || {}
      lists = map["lists"] || {}
      switches = map["switches"] || []
      docs = site.collections["instructions"]&.docs || []
      published = publish_instructions(site, brands, units, topics, lists, docs)
      publish_missing(site, brands, units, topics, lists, published)
      publish_navigation(site, brands, units, lists, switches, published)
    end

    def publish_instructions(site, brands, units, topics, lists, docs)
      published = []
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)
      docs.each do |doc|
        brand = brands.find { |item| item["id"] == doc.data["brand"] }
        unit_id = doc.data["unit"]
        topic_id = doc.data["topic"]
        next unless brand && Array(brand["units"]).include?(unit_id)

        unit = units[unit_id] || {}
        lists_for(doc, unit, topic_id, lists.keys).each do |list|
          title = topics.dig(topic_id, "title")
          data = instruction_data(brand, unit_id, unit, list, lists, topic_id, title)
          dir = File.join(brand["id"], unit_id, list, topic_id)
          html = converter.convert(render_instruction(site, doc, data))
          html = number_steps(html) unless topic_id == "placement"
          site.pages << Screen.new(site, dir, "instruction", data, html)
          published << data
        end
      end
      published
    end

    def publish_missing(site, brands, units, topics, lists, published)
      note = '<p class="note">These words are not written yet.</p>'
      brands.each do |brand|
        Array(brand["units"]).each do |unit_id|
          unit = units[unit_id] || {}
          lists.each_key do |list|
            Array(unit[list]).each do |topic_id|
              next if topic_id == "locate" && !brand["locate"]
              next if published.any? { |row| same_topic(row, brand["id"], unit_id, list, topic_id) }

              data = instruction_data(brand, unit_id, unit, list, lists, topic_id, topics.dig(topic_id, "title"))
              dir = File.join(brand["id"], unit_id, list, topic_id)
              html = missing_html(site, list, topic_id, data, note)
              site.pages << Screen.new(site, dir, "instruction", data, html)
              published << data
            end
          end
        end
      end
    end

    def publish_navigation(site, brands, units, lists, switches, published)
      brands.each do |brand|
        site.pages << Screen.new(site, brand["id"], "units", {
          "brand" => brand["id"],
          "brand_name" => brand["name"],
          "title" => brand["name"],
          "units" => Array(brand["units"]).map { |unit_id|
            unit = units[unit_id] || {}
            {
              "id" => unit_id,
              "label" => unit["label"] || unit_id,
              "href" => place_path(brand["id"], unit_id)
            }
          }
        })
        Array(brand["units"]).each do |unit_id|
          unit = units[unit_id] || {}
          present = lists.keys.select do |list|
            published.any? { |item| same_place(item, brand["id"], unit_id, list) }
          end
          next if present.empty?

          site.pages << Screen.new(site, File.join(brand["id"], unit_id), "choice", {
            "brand" => brand["id"],
            "brand_name" => brand["name"],
            "unit" => unit_id,
            "unit_name" => unit["label"] || unit_id,
            "title" => unit["label"] || unit_id,
            "lists" => present.map { |list| { "id" => list, "label" => list_label(lists, list) } }
          })
          present.each do |list|
            site.pages << Screen.new(site, File.join(brand["id"], unit_id, list), "topics", {
              "brand" => brand["id"],
              "brand_name" => brand["name"],
              "unit" => unit_id,
              "unit_name" => unit["label"] || unit_id,
              "list" => list,
              "list_name" => list_label(lists, list),
              "title" => list_label(lists, list),
              "topics" => topic_buttons(published, unit, brand["id"], unit_id, list),
              "shortcuts" => shortcuts_for(published, brand, lists, switches, unit_id, list)
            })
          end
        end
      end
    end

    def topic_buttons(published, unit, brand_id, unit_id, list)
      Array(unit[list]).filter_map do |topic_id|
        item = published.find do |row|
          same_place(row, brand_id, unit_id, list) && row["topic"] == topic_id
        end
        next unless item

        {
          "title" => item["title"],
          "href" => place_path(brand_id, unit_id, list, topic_id)
        }
      end
    end

    def shortcuts_for(published, brand, lists, switches, unit_id, list)
      found = []
      other = lists.dig(list, "other")
      if other && published.any? { |item| same_place(item, brand["id"], unit_id, other) }
        found << {
          "label" => lists.dig(list, "switch_label"),
          "href" => place_path(brand["id"], unit_id, other)
        }
      end
      Array(switches).each do |row|
        next unless row["from"] == unit_id
        target = row["to"]
        next unless Array(brand["units"]).include?(target)
        next unless published.any? { |item| same_place(item, brand["id"], target, list) }

        found << {
          "label" => row["label"],
          "href" => place_path(brand["id"], target, list)
        }
      end
      found
    end

    def instruction_data(brand, unit_id, unit, list, lists, topic_id, title)
      {
        "brand" => brand["id"],
        "brand_name" => brand["name"],
        "unit" => unit_id,
        "unit_name" => unit["label"] || unit_id,
        "list" => list,
        "list_name" => list_label(lists, list),
        "topic" => topic_id,
        "title" => title || topic_id
      }
    end

    def same_topic(item, brand_id, unit_id, list, topic_id)
      same_place(item, brand_id, unit_id, list) && item["topic"] == topic_id
    end

    def place_path(*parts)
      "/" + parts.join("/") + "/"
    end

    def missing_html(site, list, topic_id, page_data, note)
      shared = placement_include(list, topic_id)
      return note unless shared

      render_shared(site, shared, page_data)
    end

    def placement_include(list, topic_id)
      return unless topic_id == "placement"
      return "setup-placement.html" if list == "setup"
      return "troubleshooting-placement.html" if list == "troubleshooting"
    end

    def render_shared(site, name, page_data)
      path = File.join(site.source, "_includes", name)
      info = { registers: { site: site, page: page_data } }
      payload = site.site_payload.merge("page" => page_data)
      site.liquid_renderer.file(path).parse(File.read(path)).render!(payload, info)
    end

    def render_instruction(site, doc, page_data)
      page = {}
      doc.data.each { |key, value| page[key.to_s] = value }
      page.merge!(page_data)
      info = { registers: { site: site, page: page } }
      payload = site.site_payload.merge("page" => page)
      site.liquid_renderer.file(doc.path).parse(doc.content.to_s).render!(payload, info)
    end

    def number_steps(html)
      count = 0
      html.gsub(%r{<p\b([^>]*)>(.*?)</p>}m) do
        attrs = Regexp.last_match(1).to_s
        body = Regexp.last_match(2)
        if attrs.match?(/\blead\b/)
          count = 0
          "<p#{attrs}>#{body}</p>"
        elsif attrs.match?(/\b(?:note|tip)\b/)
          "<p#{attrs}>#{body}</p>"
        else
          count += 1
          "<p#{attrs}><span class=\"step-num\">#{count}</span><span class=\"step-body\">#{body}</span></p>"
        end
      end
    end

    def lists_for(doc, unit, topic_id, list_ids)
      allowed = list_ids.select do |list|
        Array(unit[list]).include?(topic_id)
      end
      requested = doc.data["lists"]
      return allowed if requested.nil?

      allowed & Array(requested)
    end

    def same_place(item, brand_id, unit_id, list)
      item["brand"] == brand_id && item["unit"] == unit_id && item["list"] == list
    end

    def list_label(lists, list)
      lists.dig(list, "label") || list
    end
  end
end
