class CreateDinosaurs < ActiveRecord::Migration[5.2]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.integer :teeth
      t.boolean :flying
    end
  end
end
