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
      units = site.data.dig("topic_map", "units") || {}
      topics = site.data.dig("topic_map", "topics") || {}
      docs = site.collections["instructions"]&.docs || []
      published = publish_instructions(site, brands, units, topics, docs)
      publish_navigation(site, brands, units, published)
    end

    def publish_instructions(site, brands, units, topics, docs)
      published = []
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)
      docs.each do |doc|
        brand = brands.find { |item| item["id"] == doc.data["brand"] }
        unit_id = doc.data["unit"]
        topic_id = doc.data["topic"]
        next unless brand && Array(brand["units"]).include?(unit_id)

        unit = units[unit_id] || {}
        lists_for(doc, unit, topic_id).each do |list|
          data = {
            "brand" => brand["id"],
            "brand_name" => brand["name"],
            "unit" => unit_id,
            "unit_name" => unit["label"] || unit_id,
            "list" => list,
            "list_name" => list_name(list),
            "topic" => topic_id,
            "title" => doc.data["title"] || topics.dig(topic_id, "title") || topic_id
          }
          dir = File.join(brand["id"], unit_id, list, topic_id)
          html = converter.convert(doc.content)
          site.pages << Screen.new(site, dir, "instruction", data, html)
          published << data
        end
      end
      published
    end

    def publish_navigation(site, brands, units, published)
      brands.each do |brand|
        site.pages << Screen.new(site, brand["id"], "units", {
          "brand" => brand["id"],
          "brand_name" => brand["name"],
          "title" => brand["name"]
        })
        Array(brand["units"]).each do |unit_id|
          unit = units[unit_id] || {}
          lists = %w[setup troubleshooting].select do |list|
            published.any? { |item| same_place(item, brand["id"], unit_id, list) }
          end
          next if lists.empty?

          site.pages << Screen.new(site, File.join(brand["id"], unit_id), "choice", {
            "brand" => brand["id"],
            "brand_name" => brand["name"],
            "unit" => unit_id,
            "unit_name" => unit["label"] || unit_id,
            "title" => unit["label"] || unit_id,
            "lists" => lists
          })
          lists.each do |list|
            site.pages << Screen.new(site, File.join(brand["id"], unit_id, list), "topics", {
              "brand" => brand["id"],
              "brand_name" => brand["name"],
              "unit" => unit_id,
              "unit_name" => unit["label"] || unit_id,
              "list" => list,
              "list_name" => list_name(list),
              "title" => list_name(list),
              "topic_ids" => Array(unit[list])
            })
          end
        end
      end
    end

    def lists_for(doc, unit, topic_id)
      allowed = %w[setup troubleshooting].select do |list|
        Array(unit[list]).include?(topic_id)
      end
      requested = doc.data["lists"]
      return allowed if requested.nil?

      allowed & Array(requested)
    end

    def same_place(item, brand_id, unit_id, list)
      item["brand"] == brand_id && item["unit"] == unit_id && item["list"] == list
    end

    def list_name(list)
      list == "setup" ? "Setup" : "Troubleshooting"
    end
  end
end
