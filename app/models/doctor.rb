class Doctor < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments

    # can't create a appointment when this validation is turned on. 
    # validates :name, presence: true, uniqueness: true
end
