class UserWithAppointmentsSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :appointments 
  has_many :doctors, through: :appointments
end
