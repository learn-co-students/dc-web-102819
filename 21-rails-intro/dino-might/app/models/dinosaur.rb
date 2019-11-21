class Dinosaur < ApplicationRecord
    has_many :rides
    has_many :cavepeople, through: :rides
end
