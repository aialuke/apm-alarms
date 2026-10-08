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
    CHEVRON = '<svg class="chevron" viewBox="0 0 8 14" width="8" height="14" aria-hidden="true" focusable="false"><path d="M1.2 1.4 6.6 7 1.2 12.6" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>'

    # Drawn on a 24px grid. The stroke, colour and size come from `.step-icon` in site.css.
    STEP_ICONS = {
      "battery" => '<rect x="4.5" y="8.5" width="13" height="7" rx="1.8"/><path d="M20 11v2"/><path d="M7.5 12h2"/>',
      "sealed" => '<rect x="6" y="11" width="12" height="8.5" rx="2.2"/><path d="M8.8 11V8.6a3.2 3.2 0 0 1 6.4 0V11"/>',
      "removable" => '<rect x="4.5" y="12.5" width="13" height="6" rx="1.6"/><path d="M20 14.5v2"/><path d="M11 9.5v-5M8.5 7 11 4.5 13.5 7"/>',
      "alarm" => '<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="3"/>',
      "network" => '<circle cx="12" cy="6.5" r="2"/><circle cx="6.5" cy="17" r="2"/><circle cx="17.5" cy="17" r="2"/><path d="M11 8.3 7.5 15.2M13 8.3l3.5 6.9M8.7 17h6.6"/>',
      "radio" => '<circle cx="7.5" cy="12" r="1.3"/><path d="M11.5 8.5a5 5 0 0 1 0 7"/><path d="M15 5.8a9 9 0 0 1 0 12.4"/>',
      "mount" => '<path d="M5 6h14"/><path d="M9 6v4M15 6v4"/><rect x="6.5" y="10" width="11" height="6.5" rx="3.2"/>',
      "recess" => '<path d="M4 7h4v8h8V7h4"/><circle cx="12" cy="11" r="2"/>',
      "plug" => '<path d="M9 4.5v4M15 4.5v4"/><path d="M7 8.5h10v3a5 5 0 0 1-10 0z"/><path d="M12 16.5v3"/>',
      "test" => '<circle cx="12" cy="12" r="7.5"/><path d="m8.8 12.2 2.2 2.2 4.2-4.4"/>',
      "pair" => '<path d="M10 14a3.5 3.5 0 0 0 5 0l2.5-2.5a3.5 3.5 0 0 0-5-5L11.5 7.5"/><path d="M14 10a3.5 3.5 0 0 0-5 0L6.5 12.5a3.5 3.5 0 0 0 5 5l1-1"/>',
      "fault" => '<path d="M7 20V5"/><path d="M7 5.5h9.5l-2 3.2 2 3.3H7"/>',
      "power" => '<path d="M12 4.5v7"/><path d="M7.6 7.6a6.5 6.5 0 1 0 8.8 0"/>',
      "remote" => '<rect x="8" y="3.5" width="8" height="17" rx="2.2"/><circle cx="12" cy="8.5" r="1.1"/><circle cx="12" cy="13" r="1.1"/>',
      "tip" => '<circle cx="12" cy="12" r="7.5"/><path d="M12 11.2v4.6"/><path d="M12 8.2v.1"/>'
    }.freeze

    UNWRITTEN = "These words are not written yet.".freeze

    CARD_ICONS_BY_TITLE = {
      "low battery" => "battery",
      "backup battery" => "battery",
      "sealed battery" => "sealed",
      "removable battery" => "removable",
      "activation" => "power",
      "pairing" => "pair",
      "use" => "remote",
      "one alarm" => "alarm",
      "interconnected alarms" => "network",
      "this alarm and the others" => "network",
      "radio range" => "radio",
      "standard mount" => "mount",
      "recess mount" => "recess",
      "just after mains power is connected" => "plug"
    }.freeze

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
      publish_combined(site, brands, units, topics, docs)
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
        next if topics.dig(topic_id, "shared")

        lists.keys.select { |list| reachable(unit, lists, list).include?(topic_id) }.each do |list|
          title = topics.dig(topic_id, "title")
          data = instruction_data(brand, unit_id, unit, list, lists, topic_id, title)
          dir = File.join(brand["id"], unit_id, list, topic_id)
          html = converter.convert(render_instruction(site, doc, data))
          html =
            case topic_id
            when "placement" then wrap_placement(html)
            when "fitting" then html
            else build_cards(html)
            end
          site.pages << Screen.new(site, dir, "instruction", data, html)
          published << data
        end
      end
      published
    end

    # The topics a list opens: its buttons, then the extra topics the map says it may open.
    def reachable(unit, lists, list)
      buttons = Array(unit[list])
      return buttons if buttons.empty?

      buttons + Array(lists.dig(list, "also")).select { |topic_id| Array(unit["setup"]).include?(topic_id) }
    end

    def publish_missing(site, brands, units, topics, lists, published)
      note = "<p class=\"note unwritten\">#{UNWRITTEN}</p>"
      brands.each do |brand|
        Array(brand["units"]).each do |unit_id|
          unit = units[unit_id] || {}
          lists.each_key do |list|
            reachable(unit, lists, list).each do |topic_id|
              next if published.any? { |row| same_topic(row, brand["id"], unit_id, list, topic_id) }

              data = instruction_data(brand, unit_id, unit, list, lists, topic_id, topics.dig(topic_id, "title"))
              dir = File.join(brand["id"], unit_id, list, topic_id)
              data["unwritten"] = true unless topics.dig(topic_id, "shared", list)
              html = missing_html(site, topics, list, topic_id, data, note)
              site.pages << Screen.new(site, dir, "instruction", data, html)
              published << data
            end
          end
        end
      end
    end

    # A unit with `combine:` in the topic map is one page with a card for each section, and no lists.
    def publish_combined(site, brands, units, topics, docs)
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)
      brands.each do |brand|
        Array(brand["units"]).each do |unit_id|
          unit = units[unit_id] || {}
          sections = Array(unit["combine"])
          next if sections.empty?

          label = unit["label"] || unit_id
          page_data = {
            "brand" => brand["id"],
            "brand_name" => brand["name"],
            "unit" => unit_id,
            "unit_name" => label,
            "title" => label,
            "combined" => true
          }
          html = sections.map { |section|
            combined_section(site, converter, docs, brand, unit_id, unit, section, topics, page_data)
          }.join
          site.pages << Screen.new(site, File.join(brand["id"], unit_id), "instruction", page_data, html)
        end
      end
    end

    def combined_section(site, converter, docs, brand, unit_id, unit, section, topics, page_data)
      doc = docs.find do |item|
        item.data["brand"] == brand["id"] && item.data["unit"] == unit_id && item.data["topic"] == section
      end
      title = topics.dig(section, "title") || section.capitalize
      return missing_card(title) unless doc

      data = instruction_data(brand, unit_id, unit, "setup", {}, section, title)
      html = converter.convert(render_instruction(site, doc, data))
      return html if section == "fitting"

      card = build_card("<p class=\"lead\">#{title}</p>" + html)
      card.start_with?("<section") ? card : missing_card(title)
    end

    def missing_card(title)
      kind = CARD_ICONS_BY_TITLE[title.downcase]
      "<section class=\"fix\"><h2 class=\"fix-head\">#{kind ? step_icon(kind) : ''}<span>#{title}</span></h2>" \
        "<div class=\"fix-steps\"><p class=\"note unwritten\">#{UNWRITTEN}</p></div></section>\n"
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
              "hint" => unit["hint"],
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
          "unwritten" => item["unwritten"],
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

    def missing_html(site, topics, list, topic_id, page_data, note)
      shared = topics.dig(topic_id, "shared", list)
      return note unless shared

      wrap_placement(render_shared(site, shared, page_data))
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

    # Steps sit in cards. A heading paragraph (`.lead`) starts a card, and a page with no
    # heading is one card. Numbers restart in each card. A Tip becomes a row inside the card.
    # The last "If ..." lines, and a line that is only a link, become outcome rows with no number.
    # The signal table stays as it is. A page with no steps, such as the unwritten note, is left alone.
    def build_cards(html)
      cut = html.rindex("</table>")
      head = cut ? html[0, cut + 8] : ""
      body = cut ? html[(cut + 8)..] : html
      head + body.split(/(?=<p\b[^>]*\blead\b)/).map { |part| build_card(part) }.join
    end

    def build_card(part)
      lead = part.match(%r{\A\s*<p\b([^>]*\blead\b[^>]*)>(.*?)</p>}m)
      rest = lead ? lead.post_match : part
      items = rest.scan(%r{<p\b[^>]*>.*?</p>|(?:(?!<p\b).)+}mi).filter_map { |raw| card_item(raw) }
      return part unless items.any? { |item| item[:kind] == :step }

      mark_outcomes(items)
      count = 0
      steps = +""
      outcomes = +""
      items.each do |item|
        case item[:kind]
        when :outcome
          outcomes << outcome_row(item[:body])
        when :step
          count += 1
          steps << "<p#{item[:attrs]}><span class=\"step-num\">#{count}</span><span class=\"step-body\">#{item[:body]}</span></p>"
        when :tip
          steps << "<p#{item[:attrs]}>#{step_icon('tip')}<span class=\"step-body\">#{item[:body]}</span></p>"
        else
          steps << item[:raw]
        end
      end
      outcomes = "<div class=\"fix-then\">#{outcomes}</div>" unless outcomes.empty?
      "<section#{card_attrs(lead)}>#{card_head(lead)}<div class=\"fix-steps\">#{steps}</div>#{outcomes}</section>\n"
    end

    def card_item(raw)
      return nil if raw.strip.empty?

      match = raw.match(%r{\A<p\b([^>]*)>(.*?)</p>\z}m)
      return { kind: :other, raw: raw } unless match

      attrs = match[1]
      kind = attrs.match?(/\b(?:note|tip)\b/) ? :tip : :step
      { kind: kind, attrs: attrs, body: match[2], raw: raw }
    end

    def mark_outcomes(items)
      tail = items.reverse.take_while { |item| item[:kind] == :step && outcome_like?(item[:body]) }
      return if tail.length == items.count { |item| item[:kind] == :step }

      tail.each { |item| item[:kind] = :outcome }
    end

    def outcome_like?(body)
      text = body.gsub(/<[^>]*>/, "").strip
      text.start_with?("If ") || body.strip.match?(%r{\A<a\b[^>]*>[^<]*</a>\.?\z})
    end

    def outcome_row(body)
      kind =
        if body.include?("/testing/") then "test"
        elsif body.include?("/pairing/") then "pair"
        elsif body.match?(/report faulty/i) then "fault"
        end
      linked = body.include?("<a ")
      icon = kind ? step_icon(kind) : ""
      go = linked ? CHEVRON : ""
      "<p class=\"then#{linked ? ' go' : ''}\">#{icon}<span class=\"then-body\">#{body}</span>#{go}</p>"
    end

    def card_attrs(lead)
      attrs = +" class=\"fix\""
      return attrs unless lead

      id = lead[1][/\bid="([^"]*)"/, 1]
      attrs << " id=\"#{id}\"" if id
      attrs << " data-tone=\"amber\"" if id == "low-battery"
      attrs
    end

    def card_head(lead)
      return "" unless lead

      title = lead[2]
      kind = CARD_ICONS_BY_TITLE[title.gsub(/<[^>]*>/, "").strip.downcase]
      "<h2 class=\"fix-head\">#{kind ? step_icon(kind) : ''}<span>#{title}</span></h2>"
    end

    def wrap_placement(html)
      "<section class=\"fix fix-plain\">#{html}</section>"
    end

    def step_icon(kind)
      "<svg class=\"step-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">#{STEP_ICONS.fetch(kind)}</svg>"
    end

    def same_place(item, brand_id, unit_id, list)
      item["brand"] == brand_id && item["unit"] == unit_id && item["list"] == list
    end

    def list_label(lists, list)
      lists.dig(list, "label") || list
    end
  end
end
