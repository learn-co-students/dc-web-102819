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
evans = Passenger.new("Evans")

ride1 = Ride.new(chine, trevor, 5.0)
ride3 = Ride.new(chine, melc, 20.0)
ride4 = Ride.new(chine, melc, 10.0)
ride2 = Ride.new(victoria, melb, 4.0)
ride5 = Ride.new(evans, melb, 75.0)
ride6 = Ride.new(evans, melb, 50.0)

# chine.my_drivers_names 
# >> ["Trevor", "Melanie C"]

binding.pry
0