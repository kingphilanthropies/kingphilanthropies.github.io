# Plugin to add environment variables to the `site` object in Liquid templates

module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['preview_token'] = ENV['PREVIEW_TOKEN'] || 'no-token'
      site.config['access_token'] = ENV['CONTENTFUL_ACCESS_TOKEN'] || 'no-token'
      site.config['space_id'] = ENV['CONTENTFUL_SPACE_ID'] || 'no-token'
    end

  end

end