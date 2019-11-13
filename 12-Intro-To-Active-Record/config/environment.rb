require 'bundler/setup'
Bundler.require
require 'require_all'
require_all './lib'
require_all './db'

# setting up the database connection (old way)
DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

# setting up the database connection (new way)
ActiveRecord::Base.establish_connection(database: "db/twitter.db", adapter: 'sqlite3')

# ActiveRecord::Base.logger = Logger.new(STDOUT)
