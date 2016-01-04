require "origin/version"

module Origin
  class << self
    # Inspired by Kaminari
    def load!

      if sprockets?
        register_sprockets
      end

      configure_sass
    end

    # Paths
    def gem_path
      @gem_path ||= File.expand_path '..', File.dirname(__FILE__)
    end

    def stylesheets_path
      File.join assets_path, 'scss'
    end

    def fonts_path
      File.join assets_path, 'fonts'
    end

    def assets_path
      @assets_path ||= File.join gem_path, 'assets'
    end

    # Environment detection helpers
    def sprockets?
      defined?(::Sprockets)
    end

    private

    def configure_sass
      require 'sass'

      ::Sass.load_paths << stylesheets_path

      # bootstrap requires minimum precision of 8, see https://github.com/twbs/bootstrap-sass/issues/409
      ::Sass::Script::Number.precision = [8, ::Sass::Script::Number.precision].max
    end

    def register_sprockets
      Sprockets.append_path(stylesheets_path)
      Sprockets.append_path(fonts_path)
    end
  end
end

Origin.load!
