class Ride

    attr_reader :passenger, :driver, :distance

    @@all = []

    def initialize(passenger, driver, distance)
        @passenger = passenger
        @driver = driver
        @distance = distance.to_f
        @@all << self
    end

    def self.all 
        @@all 
    end


    def self.average_distance
        # finds the average distance of all rides

        # collect the distance from each unique ride 
        all_distances = self.all.map do |ride|
            ride.distance
        end
        (all_distances.sum / all_distances.length).to_f
    end


end