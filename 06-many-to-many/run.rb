require "pry"
require_relative "./tweet.rb"
require_relative "./user.rb"
require_relative "./like.rb"

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

tweet1 = Tweet.new("I love coffee", coffee_dad)
tweet2 = Tweet.new("Making coffee", coffee_dad)
tweet3 = Tweet.new("I need coffee", coffee_dad)
tweet4 = Tweet.new("Life is a meaningless void", coffee_dad)
tweet5 = Tweet.new("I need tea", tea_uncle)
tweet6 = Tweet.new("I like tea", tea_uncle)
tweet7 = Tweet.new("Life is a wonderous place", tea_uncle)

tea_uncle.like_tweet(tweet1)
tea_uncle.like_tweet(tweet2)
coffee_dad.like_tweet(tweet5)
coffee_dad.like_tweet(tweet1)
puts tea_uncle.liked_tweets.include?(tweet1)
puts tea_uncle.liked_tweets.include?(tweet2)
puts !tea_uncle.liked_tweets.include?(tweet3)

puts tweet1.likers == [tea_uncle, coffee_dad]