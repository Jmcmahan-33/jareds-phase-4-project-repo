class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :user

  validates :reason_for_visit, presence: true 

  # validates_uniqueness_of :doctor_id, :scope => :user_id
end
