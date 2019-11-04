# Lab Review: Ruby Boating School

## Objectives

### Review Ruby Class Fundamentals

- What is a class and what is an instance of a class?
  - A factory where you define methods that creates an item the same way everytime.
  - The class is the cookie cutter and the cut cookies are the instances of the class
  - A class is an object in which you can define its attrbutes and its behaviors. You can give birth (instantiate) new objects of that class.
- What is an instance variable?
  - Unique to the specific instance of the class
- What is a class variable?
  - A variable that is defined for the entire class.
  - An identifier that describes something for the entire class
- What does it meant to be within the class?
  - Being within the class means to be in the code that defines a class
  - Can't be access by instances of another class or another class itself
- ❗️We can access instance and class variables through getter and setter methods
  - Getter methods sole purpose is to return the value of its respective instance or class variable
  - Setter methods purpose is to set the value of the instance variables
- Macros! Examples of macros:
  - `attr_reader`: If I did not want a user to change their username after signingup for my awwesome website
  - `attr_writer`: A password where the user can reset their password, but cannot see it
  - `attr_accessor`: I am recreating the Sims, and I want my users to be able to change and see their Sim's hair color.

### Break Down the Many-to-Many Relationship

- You need a JOIN class to keep track of the relationship between the outer classes
- The JOIN stores the association of student and the boating test
  - It stores the INSTANCE of the student taking the test and the INSTANCE of the instructor giving the test in the INSTANCE of the boating test.

### Review Ruby Fundamentals

- As a reminder, when we create methods that take in arguments, those arguments represent the parameters that *will be* passed in when the method is called

```ruby
  def my_awesome_method(argument)
    puts argument
  end

  # When we call this method, the argument is the parameter that gets passed in.

  my_awesome_method('This is the argument that I am passing in and this string will be output to the terminal')
```

- When an instance of a class if first instantiated, it is stored in a place in memoory. You can create a _reference_ to that place in memory by storing that reference in a variable. The act of storing the variable does not actually creating the instance. The .new method creates the instance.

```ruby
  Student.new("sponge bob") # This will instantiate a new Student, but without a reference (in other words, an address), it is difficult to access that student.

  patrick = Student.new("Patrick") # This student is instantiated and we have a reference to the student through the variable patrick
```

### Test Our Code in the console.rb File

- Using binding.pry, you can `cd` (or change directory) into the class and see a list of class methods, methods, instance methods, instance variables, and class variables that class and its instances have access to

```bash
  cd Student
  ls
  # => Student.methods: all  find_student
  # Student#methods: add_boating_test  first_name  grade_percentage
  # class variables: @@all
  # locals: _  __  _dir_  _ex_  _file_  _in_  _out_  _pry_
```

## mod1-code-review-boating-school

Welcome to Boating School,  a Spongebob activity that simulates a system that tracks Boating Tests.  We have three models - `Student`, `Instructor`, and `BoatingTest`.

Associations:

![alt text][chart]

[chart]: https://i.imgur.com/eiFqjJe.png

`Student` class:

- should initialize with `first_name`
- `Student.all` should return all of the student instances
- `Student#add_boating_test` should initialize a new boating test with a Student (Object), a boating test name (String), a boating test status (String), and an Instructor (Object)
- `Student.find_student` will take in a first name and output the student (Object) with that name
- `Student#grade_percentage` should return the percentage of tests that the student has passed, a Float (so if a student has passed 3 / 9 tests that they've taken, this method should return the Float `33.33`)

`BoatingTest` class:

- should initialize with Student (Object), a boating test name (String), a boating test status (String), and an Instructor (Object)
- `BoatingTest.all` returns an array of all boating tests

`Instructor` class:

- initialize with a name
- `Instructor.all` should return all instructors
- `Instructor#pass_student` should take in a student instance and test name. If there is a `BoatingTest` whose name and student match the values passed in, this method should update the status of that BoatingTest to 'passed'. If there is no matching test, this method should create a test with the student, that boat test name, and the status 'passed'. Either way, it should return the `BoatingTest` instance.
- `Instructor#fail_student` should take in a student instance and test name. Like `#pass_student`, it should try to find a matching `BoatingTest` and update its status to 'failed'. If it cannot find an existing `BoatingTest`, it should create one with the name, the matching student, and the status 'failed'.

Run `ruby tools/console.rb` in console to try out your code. You can add seed data to this file to have some sample objects to try out.

Here is some example seed data:

``` ruby
spongebob = Student.new("Spongebob")
patrick= Student.new("Patrick")

puff= Instructor.new("Ms.Puff")
krabs= Instructor.new("Mr.Krabs")

no_crashing = spongebob.add_boating_test("Don't Crash 101", "pending", puff)
power_steering_failure = patrick.add_boating_test("Power Steering 202", "failed", puff)
power_steering_pass = patrick.add_boating_test("Power Steering 201", "passed", krabs)
```

!['Sponge Bob gif'](https://media.giphy.com/media/GwYxLtDaB3Wso/giphy.gif)
