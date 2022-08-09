require 'faker'

puts '🌱 seeding data...'

# User.create(username: test, email: test@test.com, password: test)

15.times do
    User.create(username: Faker::Internet.username, email: Faker::Internet.free_email, password_digest: Faker::Internet.password)
end

condition_array = ['Excellent', 'Fair', 'Bad', 'Broken/incomplete']

category_array = ['Electronics', 'Books', 'Furniture', 'Toys/games']

5.times do
    Post.create(name: Faker::Commerce.product_name, description: Faker::Lorem.sentence, user_id: User.ids.sample, condition: condition_array.sample, category: category_array.sample)
end

puts 'seeds planted! ✅'