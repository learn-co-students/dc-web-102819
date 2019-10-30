class Cat 

    attr_reader :color
    attr_writer :age
    attr_accessor :num_of_legs, :name, :floofiness

    @@all = []
    @@num_of_cats = 0

    def initialize(name, age, floofiness, color, num_of_legs=4)
        @@all << self
        @name = name
        @age = age
        @floofiness = floofiness
        @num_of_legs = num_of_legs
        @color = color
        @@num_of_cats += 1
        puts "we are creating a new cat named #{name}"
    end

    def self.num_of_cats
        puts "There are #{@@num_of_cats}"
    end

    def num_of_cats
        "You should be using a class method"
    end

    def self.all
        @@all
    end

    def self.send_cats_to_farm_upstate
        # @@all = []
        "no never"
    end

    def say_species 
        "I am a #{@@species}"
    end

    def set_color(color)
        @color = color 
    end

    def hello
        puts "hello"
    end

    # def num_of_legs
    #     @num_of_legs
    # end

    # def num_of_legs=(num)
    #     @num_of_legs = num 
    # end

    # def name # getter
    #     @name
    # end

    # def name=(new_name) # setter
    #     @name = new_name # instance variable
    # end

    # def floofiness=(new_floofiness)
    #     @floofiness = new_floofiness
    # end

    # def floofiness
    #     @floofiness
    # end

    # def age=(new_age)
    #     @age = new_age
    # end

    # def color=(new_color)
    #     log("We have set a new color for this cat")
    #     email(mom)
    #     @color = new_color
    # end

    def age
        if @age < 5
            "I am an adorable kitten."
        else
            "I am fully grown, yet equally adorable."
        end
    end

    def introduce_me
        "Hello my name is #{self.name} and I am a pretty kitty. #{self.age}"
    end
end


ella = Cat.new("Ella", 17, 10, "black") # an instance of class Cat
lexi = Cat.new("Lexi", 5, 3, 'orange', 3)

ella.name = "Ella Bella"

puts Cat.num_of_cats

puts ella.num_of_cats