# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Dinosaur.destroy_all
Caveperson.destroy_all
Ride.destroy_all
# Dinosaur.create(name: "", teeth: , flying: )
dino1 = Dinosaur.create(name: "T-REX", teeth: 32, flying: false)
dino2 = Dinosaur.create(name: "Stegasaurus", teeth: 20, flying: false)
dino3 = Dinosaur.create(name: "Pterodactyl", teeth: 0, flying: true)
dino4 = Dinosaur.create(name: "Megalodon", teeth: 124, flying: 'sometimes')

# CavePerson.create(name: "", age: )
cave1 = Caveperson.create(name: "Og", age: 30)
cave2 = Caveperson.create(name: "Bog", age: 24)
cave3 = Caveperson.create(name: "Balthazar", age: 13)

# Ride.create(dinosaur: dino, cave_person: cave)
cave1 = Ride.create(dinosaur: dino1, caveperson: cave1)
cave2 = Ride.create(dinosaur: dino2, caveperson: cave2)
cave3 = Ride.create(dinosaur: dino3, caveperson: cave3)
