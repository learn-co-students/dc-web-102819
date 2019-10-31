class School 

    attr_reader :name

    def initialize(name)
        @name = name
    end

    def instructors
        Instructor.all.select do |instructor|
            instructor.school == self 
        end

    end

    # def add_instructor(instructor)
    #     new_instructor = Instructor.new(instructor)
    #     @instructors << new_instructor
    #     return new_instructor
    # end
    
    # def remove_instructor(instructor)
    #     fired_instructor = @instructors.select do |instructor| 
    #         instructor.name == instructor 
    #     end
    #     @instructors.remove(fired_instructor)
    # end

end

class Instructor

    attr_accessor :name, :school

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all 
        @@all 
    end

end

flatiron = School.new("Flatiron")

trevor = Instructor.new("Trevor")
chine = Instructor.new("Chine")
trevor.school = flatiron
chine.school = flatiron

miss_bliss = Instructor.new("Miss Bliss")
bayside = School.new("Bayside High")

miss_bliss.school = bayside

print flatiron.instructors