class DoctorsController < ApplicationController
    skip_before_action :authorize

    def index
        # index doctors for only the current user. 
        doctors = current_user.doctors
        render json: doctors
    end 

    def create
        doctor = current_user.doctors.create(doctor_params)
        if doctor.valid? 
            render json: doctor 
        else
            render json: {errors: doctors.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # def show
    #     doctor = current_user.doctors.find_by(id: params[:id])
    #     if doctor 
    #         render json: doctor
    #     else
    #         render json: {errors: "Not Found"}, status: :unauthorized
    #     end
    # end 

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
