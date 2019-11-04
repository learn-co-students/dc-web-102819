class BoatingTest

  attr_reader :student, :name, :instructor
  attr_accessor :status

  @@all = []
  def initialize(student, name, status, instructor)
    # Student is an instance of the Student class
    # name is a string
    # status is a string
    # instructor is an instance of the Instructor class

    @student = student
    @name = name
    @status = status
    @instructor = instructor
    
    @@all << self
  end

  def self.all
    @@all
  end
end