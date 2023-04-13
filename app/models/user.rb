class User < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointments
    has_secure_password
    validates :username, presence: true, uniqueness: true
    # validates :username, :password, :password_confirmation presence: true, uniqueness: true
end
