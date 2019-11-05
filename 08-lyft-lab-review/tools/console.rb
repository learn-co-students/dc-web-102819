require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


trevor = Driver.new("Trevor")
melb = Driver.new("Melanie B")
melc = Driver.new("Melanie C")

chine = Passenger.new("Chine")
victoria = Passenger.new("Victoria")
emma = Passenger.new("Emma")
geri = Passenger.new("Geri")

ride1 = Ride.new(chine, trevor, 5.0)
ride3 = Ride.new(chine, melc, 20.0)
ride2 = Ride.new(victoria, melb, 4.0)
print chine.rides

# chine.my_drivers_names 
# >> ["Trevor", "Melanie C"]

binding.pry
0