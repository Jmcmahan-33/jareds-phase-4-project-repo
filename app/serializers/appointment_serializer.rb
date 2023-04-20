class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_field, :reason_for_visit
  has_one :doctor
  has_one :user

  # refactor start try, may remove lines below
  belongs_to :user
  belongs_to :doctor
end
