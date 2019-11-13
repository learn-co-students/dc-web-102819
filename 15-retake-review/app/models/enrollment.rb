class Enrollment

    @@all = []

    def initialize(course, student, date_enrolled)
        @course, @student, @date_enrolled = course, student, date_enrolled
        @@all << self
    end

    def self.all
        @@all 
    end


end
