class Course

    attr_reader :name, :description, :length

    @@all = []

    def initialize(name, length, description)
        @name, @length, @description = name, length, description
        @@all << self
    end

    def self.all 
        @@all 
    end

    # write a method that returns the longest course (highest length)
    def self.longest_course
        # gets an array of all lengths
        # length = self.all.map do |course|
        #     course.length 
        # end 
        # # binding.pry
        # max_length = length.max

        # course_array = self.all.find do |course|
        #      course.length == max_length
        # end
        # course_array[0]

        self.all.max_by do |course|
            course.length
        end

    end

    def enrollments
        Enrollment.all.select do |enrollment|
            enrollment.course == self
        end
    end

    def students
        # returns all students in this course
        self.enrollments.map do |enrollment|
            enrollment.student 
        end
    end

    def roster vs self.roster
        # write a method that returns just the full names
        # of all students in the course

    # def how_long_is_this_course?
    #     return @length
    # end

    # def name
    #     return @name
    # end

    # def length
    #     return @length
    # end

    # def description
    #     return @description
    # end
end