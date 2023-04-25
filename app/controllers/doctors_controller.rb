class DoctorsController < ApplicationController
    before_action :authorize, only: [:create]
# q: what does line 2 do?
# a: it makes sure that the user is logged in before they can create a doctor.
  

    def index
        # index doctors for only the current user. 
        doctors = Doctor.all
        render json: doctors
    end 


    
    def create 
        doctor = current_user.doctors.create(doctor_params)
        render json: doctor, status: :created
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
