class User

    attr_reader :username


    def initialize(username)
        @username = username
    end

    def tweets
        # returns all Tweets by this User

        # get all Tweets and select all Tweets where tweet.user is self
        tweets = Tweet.all.select do |tweet|
            tweet.user == self 
        end
        return tweets
    end

    def post_tweet(body)
        # that takes a body, 
        # creates a new tweet, 
        # and adds it to the user's tweet collection
        Tweet.new(body, self)

    end

end


