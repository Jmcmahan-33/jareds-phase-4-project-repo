class Doctor < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    # validates :name true, uniqueness: true
end
