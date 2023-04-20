class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :username, :password_digest

   # refactor start try, may remove lines below
  has_many :appointments
  has_many :doctors, through: :appointments
end
