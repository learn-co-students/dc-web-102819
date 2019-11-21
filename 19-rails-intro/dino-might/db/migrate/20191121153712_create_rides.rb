class CreateRides < ActiveRecord::Migration[5.2]
  def change
    create_table :rides do |t|
      t.integer :dinosaur_id
      t.integer :caveperson_id
    end
  end
end
