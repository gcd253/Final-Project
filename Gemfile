source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.3", ">= 7.0.3.1"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# To allow real-time chat
gem 'actioncable', '~> 7.0', '>= 7.0.3.1'

# Faker gem for fake seed data
gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'

# Serializer
gem 'active_model_serializers'

# Rack
gem 'rack', '~> 2.2', '>= 2.2.4'

# Byebug
gem 'byebug', '~> 11.1', '>= 11.1.3'

# Action Text and i dont even know what its for :'(
gem 'actiontext', '~> 7.0', '>= 7.0.3.1'

# Image processing
gem 'image_processing', '~> 1.12', '>= 1.12.1'

# CORS gem
gem 'rack-cors', '~> 1.1', '>= 1.1.1'

# Use sqlite3 as the database for Active Record
gem "sqlite3", "~> 1.4"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end


gem "jsonapi-serializer", "~> 2.2"
