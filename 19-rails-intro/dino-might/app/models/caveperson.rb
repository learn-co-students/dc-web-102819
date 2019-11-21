class Caveperson < ApplicationRecord
   has_many :rides
   has_many :dinosaurs, through: :rides
end
