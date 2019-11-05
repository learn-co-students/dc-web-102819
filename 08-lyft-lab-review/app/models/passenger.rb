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

    def my_drivers_names
        # returns an array of all the drivers' names 
        # that you've driven with (as strings)
        self.drivers.collect do |driver|
            driver.name
        end.uniq
    end

    def total_distance
        # returns total distance of all rides of this passenger

        # look at all this passenger's rides
        # get the distances
        distances = self.rides.collect do |ride|
            ride.distance
        end
        distances.sum 

    end

    def self.premium_members
        # returns all members who have traveled over 100 miles
        self.all.select do |passenger|
            passenger.total_distance > 100 
        end

    end
    # def my_drivers_names_through_rides

    #     self.rides.collect do |ride|
    #         ride.driver.name 
    #     end
    # end
end