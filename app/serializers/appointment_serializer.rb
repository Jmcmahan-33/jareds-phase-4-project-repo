class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_field, :reason_for_visit, :doctor_id, :doctor

  has_one :user
  # final
end



