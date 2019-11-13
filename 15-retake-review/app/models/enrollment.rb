class Enrollment

    @@all = []

    attr_reader :course, :student, :date_enrolled

    def initialize(course, student, date_enrolled)
        @course, @student, @date_enrolled = course, student, date_enrolled
        @@all << self
    end

    def self.all
        @@all 
    end


end
