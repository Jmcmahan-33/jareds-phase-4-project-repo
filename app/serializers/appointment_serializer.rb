class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_field, :reason_for_visit
  has_one :doctor
  has_one :user
end
