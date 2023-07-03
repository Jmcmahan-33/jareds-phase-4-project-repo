class DoctorsController < ApplicationController
    before_action :authorize
   
   
    def index
        doctors = Doctor.all
        render json: doctors
    end 

    def create 
        doctor = Doctor.create!(doctor_params)
        render json: doctor, status: :created
    end

  

    private

    def doctor_params
        params.permit(:name, :speciality, :room_number, :rate, :notes)
    end 

end



 
    
   