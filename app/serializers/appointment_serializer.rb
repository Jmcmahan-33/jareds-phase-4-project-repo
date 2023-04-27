class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_field, :reason_for_visit, :doctor_id, :doctor

  has_one :doctor
  has_one :user

# q:diplay doctor name in appointment index
# a: add doctor to attributes

  # refactor start try, may remove lines below
  belongs_to :user
  belongs_to :doctor
end
