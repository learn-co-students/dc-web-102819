class Instructor

  @@all = []
  def initialize(name)
    @name = name
    self.class.all << self
  end

  def self.all
    @@all
  end

  def pass_student(student, test_name)
    # student is an instance of the Student class
    # test_name is a string

    found_test = BoatingTest.all.find do |test|
      test.name == test_name && test.student == student
    end

    if found_test
      found_test.status = 'passed'
      found_test
    else
      BoatingTest.new(student, test_name, 'passed', self)
    end
  end

  def fail_student(student, test_name)
    found_test = BoatingTest.all.find do |test|
      test.name == test_name && test.student == student
    end

    if found_test
      found_test.status = 'failed'
      found_test
    else
      BoatingTest.new(student, test_name, 'failed', self)
    end
    
  end
  
end