class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :user

  # here lies the issue of creating a doctor. Its trying to validate reason for visit because appointments is connected to doctors.

  # validates :reason_for_visit, presence: true 

  # validates_uniqueness_of :doctor_id, :scope => :user_id
end
