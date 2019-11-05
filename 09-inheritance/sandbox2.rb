class Dog

    attr_accessor :name, :age

    DOG_YEARS = 7

    def initialize(name, age)
        @name, @age = name, age
    end

    def puppy?
        human_years > 18
    end

    private 

    def human_years
        self.age * DOG_YEARS 
    end

    def private_method_2
        #does something secret
    end


end

sparky = Dog.new("Sparky", 5)

puts sparky.puppy?
puts sparky.human_years