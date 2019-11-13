
class Student

    @@all = [] # class variable 
    @@species = "Human"

    def initialize(first_name, last_name)
        @first_name = first_name # ann
        @last_name = last_name
        # binding.pry

        @@all << self # instance of a specific student
    end

    def self.all # class method; "self" means Student class
        # Student.all
        return @@all
    end

    def self.species # Student.species
        return @@species
    end

    def first_name
        return @first_name.capitalize
    end

    def last_name # name of method
        # the instance variable 
        # representing this specific student's last_name
        return @last_name.capitalize
    end

    def full_name # returns the student's full name e.g., "Trevor Jameson"
        return "#{self.first_name} #{self.last_name}"
    end

    # write a method that returns an array of all students' full names
    # ["Trevor Jameson", "Chine Anikwe", "Ann Duong"]

    def self.names 
        self.all.collect do |student|
            student.full_name
        end
    end

    def enroll_in_course(course, date)
        # create an enrollment instance
        Enrollment.new(course, self, date)
    end

    def enrollments
        Enrollment.all.select do |enrollment|
            enrollment.student == self
        end
    end

    def courses
        # returns all a student's courses
        # take enrollments and map to transform
        # data into courses for that student
        self.enrollments.map do |enrollment|
            enrollment.course
        end
    end

end
 

