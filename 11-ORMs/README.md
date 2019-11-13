## Let's build Twitter app

## Problem: What happens to all of our data when we restart our app?

# Intro to ORMs (Object Relational Mapping)
 - No coding along, sit back and relax

## Organizing Big Projects
- Gemfile and Gemfile.lock
- environment.rb has some new code
- twitter.db

## Solution...
- We already know OO Programming
 - We already have a User class
 - We can make instances of User
 - And can call methods of those instances and classes

- Create methods that will read from and write to our DB!!!
  - Create, Read, Update, Delete
















#### How would we....
  - Write the SQL to create a Users table (with columns id and username)?
  - Write the SQL to get all Users?
  - Write the SQL to create a new user with a username of 'coffee_dad'?
  - Write the SQL to find an User by their id?
  - Write the SQL to update an Users's username (given their id)?
  - Write the SQL to delete an User (given their id)?



















##### Answers
`SELECT * FROM users;`
`CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT);`
`INSERT INTO users (username) VALUES ("ann");`
`SELECT * FROM users WHERE id = ?;`
`UPDATE users SET name = ? WHERE id = ?;`
`DELETE FROM users WHERE id = ?;`

SELECT LAST_INSERT_ROWID()
