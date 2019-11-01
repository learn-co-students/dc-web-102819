class Owner
  
  @@all = []
  
  # Macro (aka "shorthand") method for creating an 
  
  attr_reader :species, :name
  
  def initialize(name)
    # self.name = name
    @name = name
    @species = "human"
    @@all << self
  end

  def self.all
    @@all
  end

  def self.count
    @@all.length
  end

  def self.reset_all
    @@all = []
  end

  def say_species
    "I am a #{@species}."
  end

  def buy_cat(name)
    Cat.new(name, self)
  end

  def cats
    Cat.all.select do |kitty|
      kitty.owner == self
    end
  end

  # Longer version of attr_accessor
  # def name
  #   @name
  # end

  # def name=(name)
  #   @name = name
  # end

end

