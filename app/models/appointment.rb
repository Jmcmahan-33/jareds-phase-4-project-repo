class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :user


  validates :reason_for_visit, presence: true 
  validates :date_field, presence: true
  # final
  
end
