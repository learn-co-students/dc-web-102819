class Student

  @@all = []
  attr_reader :first_name

  def initialize(first_name)
    @first_name = first_name
    @@all << self
  end

  def self.all
    @@all
  end

  def add_boating_test(name, status, instructor)
    # name is a string
    # status is a string
    # instructor is an instance of Instructor
    BoatingTest.new(self, name, status, instructor)
  end

  def self.find_student(first_name)
    # first_name is a string
    # self.all works too
    # Student.all also works for this!

    # .select will return a new array of all elements that match the specified criteria (e.g. where the code within the block returns true)

    # .find will return the first element where the block returns true (e.g. that meet the specified criteria)

    @@all.find do |student|
      student.first_name == first_name
    end
  end





  def grade_percentage
    all_student_tests = BoatingTest.all.select do |test|
      test.student == self
    end

    passed_tests = all_student_tests.select do |test|
      test.status == 'passed'
    end

    passed_tests.count.to_f / all_student_tests.count.to_f

    (passed_tests.count.to_f / all_student_tests.count.to_f) * 100
    
  end
  
end