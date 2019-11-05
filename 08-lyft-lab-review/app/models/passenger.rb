class Passenger

    attr_reader :name 
    # def name
    #     @name 
    # end

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all 
        @@all 
    end


    def rides
        # returns all rides this passenger has taken
        Ride.all.select do |ride|
            ride.passenger == self
        end
    end

    def drivers
        self.rides.collect do |ride|
            ride.driver
        end
    end

end