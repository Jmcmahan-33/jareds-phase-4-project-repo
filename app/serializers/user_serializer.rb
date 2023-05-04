class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :username, :password_digest
  has_many :appointments
  # has_many :doctors, through: :appointments
end



