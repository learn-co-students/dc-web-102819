class User
	attr_accessor :username, :id
	@@all = []

	def initialize(username, id=nil)
		@username = username
		@id = id
		@@all << self
	end

	#grab all user from the DB
	#should return an array of instances
	def self.all
		arrayOarrays = DB[:conn].execute("SELECT * From users")
		arrayOarrays.map{ |row| User.row_to_instance(row)}
	end

	def self.row_to_instance(row)
		#return an instance using that row
		User.new(row[1], row[0])
	end

	#create the row in the DB
	#return instance of that class
	def self.create(username)
		#create the instance in Ruby World
		user = User.new(username)

		#create the row in DB world

	 	sql = "INSERT into users ('username') values ('#{username}');"
		DB[:conn].execute(sql)
		id = DB[:conn].execute('SELECT LAST_INSERT_ROWID()')[0][0]
		user.id = id
		user
	end

	def self.welcome
		puts "Welcome to Twitter"
	end
end
