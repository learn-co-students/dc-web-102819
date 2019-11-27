class Snack < ApplicationRecord
    belongs_to :retailer, optional: true
    validates :name, :deliciousness, :calories, presence: true
    validates :name, uniqueness: {case_sensitive: false}
    validates_numericality_of :deliciousness, :calories
end
