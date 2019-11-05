class Driver

    attr_reader :name 

    @@all = []

    def initialize(name)
        @name = name 
        @@all << self
    end

    def self.all
        @@all 
    end

    def rides 
        Ride.all.select do |ride|
            ride.driver == self 
        end
    end

    def passengers 
        self.rides.collect {|ride| ride.passenger}
    end

    def total_distance_driven
        self.rides.collect do |ride|
            ride.distance 
        end.sum
    end

    def self.mileage_cap(distance)
        # takes an argument of a distance (float) 
        # and returns all drivers who have exceeded that mileage
        self.all.select do |driver|
            driver.total_distance_driven > distance
        end

    end
end