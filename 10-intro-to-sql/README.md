# Intro to SQL

## Objectives

+ Understand persistance and the need for using SQL
+ Define SQL
+ Introduce the concept of CRUD actions
+ Define Relational Databases
+ Explain the difference between SQLite3 and SQL
+ Explore provided data through a SQLite Browser
+ Perform CRUD actions on a single table
+ Perform CRUD actions across multiple tables
+ Understand the concept of a JOIN

### What is persistance

+ Up until now, all objects you have created disappear from memory when the program stops running.
+ With a database, we can store those objects as data and *persist* that information between program sessions.
+ In this way, an object is not deleted until a need emerges to delete it from memory.

### What is SQL and what can we do with it

+ ❓What is SQL, does anyone know?
  + Stands for Structured Query Language
  + Is a language that allows us to:
    + Store / persist information
    + Manipulate that information

+ ❓What can one do with SQL?
  + Some specific actions we can do are CRUD actions, a common acronym we'll see throughout the program, web development, and computing in general:
    + Create data --> `Person.new`
    + Read data --> Getter Methods
    + Update data --> Setter Methods
    + Delete data --> Paul simulated deleting objects by clearing the Pets.all array

+ Why are we learning SQL?
  + Ramping you up to Rails
  + It's not part of the core curriculum, but it is good to know basics like JOINS.
  + We'll be using ORMs to query our databases, but it's good to know what they are doing under the hood
    + This is helpful with understanding that Rails is not magic!

### What is a Relational Database

+ A relational database is a group of tables structured to recognize relations among stored items of information
+ Think of it as a group of Excel spreadsheets
  + Each spreadsheet, or *table*, represents a class, or *model*
  + Each *row* in the table represents an *instance* of that model
  + Each *column* in the table represents an *attribute* that the instance of a model can have
  + Each instance will have an *id* or *Primary Key* that is a unique identifier for that instance in its respective table
+ By structuring our tables in a specific way, we can represent their relationships to each other
  + Ex: An artist has a relationship to their album.
    + artist -> :id, :name
    + album -> :id, :title, :album_id
+ How is the relationships represented? Through naming conventions and JOINs
  + If an artist has many albums, and it's the album's responsibility to keep track of that relationship, we can store the artist's id (i.e. primary key with is a UNIQUE identifier) as an attribute on the album table
  + This is called a *Foreign Key*. While it is a UNIQUE identifier, it is identifies (or represents) a different entity (or table).
  + The column name specifies the table this key is associated with --> album_id references the *primary Key* on the albums table.

+ What is a JOIN? (High-level discussion)
  + Combines columns from one or more tables in a relational database
  + A JOIN is a means for combining one or more tables by using values common to each
+ What is an INNER JOIN?
  + An INNER JOIN will only include rows where a common value is shared between the tables
  + Think of a VINN Diagram. The INNER JOIN is the center. Any rows on the right that do not have a common value on the left are excluded (and vice versa)
+ What is an OUTER JOIN?
  + A LEFT OUTER JOIN will include ALL entries from the first (left) table introduced to the JOIN regardless of if there is a common value with the second (right) table. However, any values on the right table that do not have a common value on the left table will be exlcuded.
  + A RIGHT OUTER JOIN will include ALL entries from the second (right) table introduced to the JOIN regardless of if there is a common value with the first (left) table. However, any values on the left table that do not have a common value on the right will be excluded.
  + A FULL OUTER JOIN will include all entries from both tables regardless of whether there are common values shared between the two.

### What is the difference between SQL, SQLite3, and SQLite DB Browser

+ SQL is a query language
+ SQLite3 is a relational database management system that uses SQL to return information stored within the database
+ Our db file is not human readable, so if we want to look at our database, we'll need to either use our terminal, or a Graphic Uner Interface (GUI) like SQLite DB Browser.

### Start the Challenges

#### Getting Started

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

#### Single Table Challenges

1. Write the SQL to return all of the rows in the artists table

  ```SQL
  SELECT * FROM artists;
  ```

2. Write the SQL to select the artist with the name "Black Sabbath"

  ```SQL
  SELECT * FROM artists WHERE name IS 'Black Sabbath';
  ```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

  ```SQL
  CREATE TABLE fans (
    id INTEGER PRIMARY KEY,
    name TEXT
  );
  ```

+ With this line, we are both creating the table and outlining the SCHEMA for that table.
+ A schema describes the structure of our table and the data types each column of a table can contain.

4. Write the SQL to alter the fans table to have a artist_id column type integer?

  ```SQL
  ALTER TABLE fans ADD COLUMN artist_id INTEGER;
  ```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas. artist_id **169**

  ```SQL
    INSERT INTO fans (name, artist_id) VALUES ('Trevor', 169);
  ```

6. Write SQL to update your name in the fans table to something new.

  ```SQL
  UPDATE fans SET name= 'New Name Here' WHERE id = 1;
  ```

7. Write the SQL to return fans that are not fans of the Black Eyed Peas.

  ```SQL
  SELECT * FROM fans WHERE artist_id != 169;

  SELECT * FROM fans WHERE artistId IS NOT 169;
  ```

#### Multiple Table Challenges

1. Write the SQL to display an artists name next to their album title

  ```SQL
  SELECT * FROM artists INNER JOIN albums ON artist_id = artists.id;
  ```

2. Write the SQL to display artist name, album name and number of tracks on that album

  ```SQL
  SELECT artists.name, albums.title, COUNT(tracks.album_id) AS num_tracks
  FROM artists
  INNER JOIN albums
  ON artists.id = albums.artist_id
  INNER JOIN tracks
  ON tracks.album_id = albums.id
  GROUP BY albums.title;
  ```

3. Write the SQL to return the name of all of the artists in the 'Pop' Genre

  ```SQL
  SELECT artists.name FROM artists
  INNER JOIN albums
  ON artists.id = albums.artist_id
  INNER JOIN tracks
  ON albums.id = tracks.album_id
  INNER JOIN genres
  ON tracks.genre_id = genres.id
  WHERE genres.name LIKE 'Pop';
  ```

#### BONUS

1. Return the names of the artists and their number of rock tracks
    who play Rock music
    and have mort than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

  ```SQL
  SELECT artists.name, COUNT(tracks.id) AS track_count
  FROM artists
  INNER JOIN albums
  ON artists.id = albums.artist_id
  INNER JOIN tracks
  ON albums.id = tracks.album_id
  INNER JOIN genres
  ON tracks.genre_id = genres.id
  WHERE genres.name LIKE 'Rock'
  GROUP BY artists.name
  HAVING track_count >= 30
  ORDER BY track_count DESC;
  ```
  