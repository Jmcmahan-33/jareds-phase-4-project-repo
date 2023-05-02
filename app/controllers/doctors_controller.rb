class DoctorsController < ApplicationController
    before_action :authorize, only: [:create]

    def index
        doctors = Doctor.all
        render json: doctors
    end 

    # def create 
    #     doctor = current_user.doctors.create(doctor_params)
    #     render json: doctor, status: :created
    # end
    def create 
        doctor = Doctor.create(doctor_params)
        render json: doctor, status: :created
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def doctor_params
        params.permit(:name, :speciality, :room_number, :rate, :notes)
    end 

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end 
end
