class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :speciality, :room_number, :rate, :notes
end
