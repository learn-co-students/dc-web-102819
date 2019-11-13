class User < ActiveRecord::Base
  has_many :tweets
  has_many :user_drinks
  has_many :drinks, through: :user_drinks

  def say_hi
    binding.pry
    puts "#{self.username} says hi"
  end


  # def tweets
  #   Tweet.all.select{|tweet|
  #     tweet.user_id == self.id
  #   }
  # end
end
