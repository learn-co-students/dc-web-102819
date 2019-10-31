require "pry"
require_relative "tweet.rb"
require_relative "user.rb"

coffee_dad = User.new("Coffee Dad")

puts coffee_dad.is_a? User 
puts coffee_dad.username == "Coffee Dad"

tweet1 = Tweet.new("I love coffee", coffee_dad)
tweet2 = Tweet.new("I need coffee", coffee_dad)
tweet3 = Tweet.new("Life is a meaningless void", coffee_dad)

puts tweet1.is_a? Tweet 
puts tweet1.message == "I love coffee"
puts tweet1.user == coffee_dad

puts coffee_dad.tweets.include?(tweet1)

# puts coffee_dad.tweets

puts Tweet.all.include?(tweet1)
puts Tweet.all.include?(tweet2)

puts tweet1.username == "Coffee Dad"

coffee_dad.post_tweet("Need some coffee")

print coffee_dad.tweets