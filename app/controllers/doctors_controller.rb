class DoctorsController < ApplicationController
    # before_action :authorize, only: [:create, :index]
    before_action :authorize


    def index
        doctors = Doctor.all
        render json: doctors
    end 

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

    # def authorize
    #     return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    # end 
end
