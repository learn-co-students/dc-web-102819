class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message, @user = message, user
        @@all << self
    end

    def username
        self.user.username
    end

    def self.all
        @@all
    end

    def self.print_all_usernames
        usernames = Tweet.all.map do |tweet|
            tweet.username
        end
        usernames.uniq

    end

    def likers
        # returns a collection of all the 
        # Users who have liked this tweet

        # Look at all the Likes
        Like.all.select do |like|
        # choose the Likes for tweet1 (or whatever)
            like.tweet == self
        end.collect do |like|
        # get the User for each of those Likes
            like.user 
        end
    end
end