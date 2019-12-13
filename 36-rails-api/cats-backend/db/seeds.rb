# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all
Hobby.destroy_all

ella = Cat.create(name: "Ella", img: "https://i.imgur.com/YksIEqY.jpg")
sylvester = Cat.create(name: "Sylvester", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Sylvester_the_Cat.svg/172px-Sylvester_the_Cat.svg.png")
grumpy_cat = Cat.create(name: "Grumpy Cat", img: "https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/master/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg")

eating = Hobby.create(name: "Eating", description: "Eating all the things that will them vomit")
napping = Hobby.create(name: "Napping", description: "Find a sunbeam")
pushing = Hobby.create(name: "Pushing things off table", description: "You didn't like that vase anyway")

ella.hobbies << eating
ella.hobbies << napping

sylvester.hobbies << napping

grumpy_cat.hobbies << pushing