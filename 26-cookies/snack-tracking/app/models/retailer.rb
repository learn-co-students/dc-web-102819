class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks

    def just_say_hi
        "Hi"
    end
end
