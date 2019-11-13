class Course

    attr_reader :name, :description, :length

    def initialize(name, length, description)
        @name, @length, @description = name, length, description
    end

    # write a method that returns the longest course (highest length)

    
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