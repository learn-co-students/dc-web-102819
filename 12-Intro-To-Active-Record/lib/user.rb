class User < ActiveRecord::Base
  def self.find_shortest_username
    self.all.min_by{|user| user.username.length}
  end

  def shout
    puts "Thank goodness it's friday"
  end
  # attr_accessor :username, :id
  #
  # def initialize(username, id=nil)
  #   @username = username
  #   @id = id
  # end
  #
  # def self.welcome
  #   puts "Welcome to Twitter"
  # end
  #
  # def self.create(name)
  #   user = User.new(name)
  #   create_user_sql = "INSERT INTO users (username) VALUES (?)"
  #   DB[:conn].execute(create_user_sql, name)
  #   new_id = DB[:conn].execute("SELECT last_insert_rowid()")[0][0]
  #   user.id = new_id
  #   user
  # end
  #
  # def self.all
  #   get_all_sql = "SELECT * FROM users"
  #   db_users_array = DB[:conn].execute(get_all_sql)
  #   db_users_array.map{ |row|
  #     self.make_instance_from_row(row)
  #   }
  # end
  #
  # def self.make_instance_from_row(row)
  #   User.new(row[1], row[0])
  # end

end
