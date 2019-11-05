class Animal

    attr_reader :name, :color

    def initialize(name, color)
        @name, @color = name, color
    end

    def say_hi
        "Hello my name is #{self.name}"
    end

end

module SwimmingAnimal

    module InstanceMethods
        def take_a_swim # instance
            puts "I like swimming"
        end

        
    end

    module ClassMethods

        def can_swim? # class 
            return true
        end
    end
end

class Mammal < Animal 

    def is_warm_blooded?
        return true
    end
end

class Cat < Mammal 

    attr_reader :floofiness, :species

    extend SwimmingAnimal::ClassMethods
    include SwimmingAnimal::InstanceMethods

    def initialize(color, floofiness, name="Kitty" )
        @species = "feline"
        @floofiness = floofiness
        super(name, color)
    end

    def say_hi
        puts "Meow"
        super()
    end

end



class Giraffe < Mammal 

end

class Dog < Mammal

end

class Fish < Animal

end


ella = Cat.new("black", 8, "Ella")
puts Cat.can_swim?
puts ella.take_a_swim