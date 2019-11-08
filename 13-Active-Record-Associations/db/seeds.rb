User.destroy_all
Tweet.destroy_all
Drink.destroy_all

ann = User.create(username: "ann")
paul = User.create(username: "paul")

Tweet.create(content: "I love coffee", user_id: paul.id)
Tweet.create(content: "I am Paul", user_id: paul.id)
Tweet.create(content: "I love water", user_id: ann.id)
Tweet.create(content: "I'm Ann", user_id: ann.id)

coffee = Drink.create(name: "Coffee")
tea = Drink.create(name: "Tea")
water = Drink.create(name: "Water")

UserDrink.create(user_id: ann.id, drink_id: water.id)
UserDrink.create(drink_id: tea.id, user_id: ann.id)
UserDrink.create(drink_id: tea.id, user_id: paul.id)
UserDrink.create(drink_id: coffee.id, user_id: paul.id)
