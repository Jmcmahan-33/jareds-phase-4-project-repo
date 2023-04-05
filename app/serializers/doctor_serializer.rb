class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :speciality, :room_number, :session_length, :rate, :notes
end
