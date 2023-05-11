class DoctorsController < ApplicationController
    before_action :authorize
    # done


    def index
        doctors = Doctor.all
        render json: doctors
    end 

    def create 
        doctor = Doctor.create!(doctor_params)
        render json: doctor, status: :created
    end

    private

    # def current_user
    #     User.find_by(id: session[:user_id])
    # end

    def doctor_params
        params.permit(:name, :speciality, :room_number, :rate, :notes)
    end 

end
