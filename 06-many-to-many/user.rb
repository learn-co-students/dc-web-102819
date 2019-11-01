class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(text)
        Tweet.new(text, self)
    end

    def like_tweet(tweet)

        Like.new(tweet, self)

    end

    def liked_tweets
    # returns a collection of all the tweets 
    # this user has liked

        # Look at all the Likes
        my_likes = Like.all.select do |like|
        # looked at the user and searched for Tea Uncle
            like.user == self
        end
        # looked at the tweet column for those rows
        my_likes.collect do |like|
            like.tweet
        end
    end
end


