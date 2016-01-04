# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'origin/version'

Gem::Specification.new do |spec|
  spec.name          = "origin"
  spec.version       = Origin::VERSION
  spec.authors       = ["Murray Summers"]
  spec.email         = ["murray@freeagent.com"]
  spec.summary       = "Origin is FreeAgent's internal CSS framework"
  spec.description   = "Origin consumes our CSS utilities and provides some global UI components. It also documents our principles, HTML & CSS naming conventions and code style."
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"
end
