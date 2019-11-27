class Retailer < ApplicationRecord
    has_many :snacks
    validates :name, :year_established, presence: true
    validate :year_established_must_be_valid, 
        unless: Proc.new {|params| params.year_established.blank? }

    accepts_nested_attributes_for :snacks, reject_if: Proc.new{|attr| attr[:name].blank?}

    def just_say_hi
        "Hi"
    end

    def year_established_must_be_valid
        if !(self.year_established >= 1800 && self.year_established <= Date.today.year)
            errors.add(:year_established, "must be between 1800 & #{Date.today.year}")
        end
    end
end
