class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :speciality, :room_number, :rate, :notes

  # refactor start try, may remove lines below
  has_many :appointments
  has_many :users, through: :appointments
end
