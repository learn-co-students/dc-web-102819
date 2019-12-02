class User < ApplicationRecord
  has_many :visits
  has_many :locations, through: :visits
  validates :name, presence: true
end
