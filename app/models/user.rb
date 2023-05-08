class User < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointments
    has_secure_password
    validates :password, presence: true
    validates :full_name, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true 
    # done
end
