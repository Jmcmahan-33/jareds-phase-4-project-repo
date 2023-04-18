class AppointmentsController < ApplicationController
    skip_before_action :authorize

    def index 
    end

    def create
        appointment = current_user.appointments.create(appointment_params)
        if appointment.valid? 
            render json: appointment 
        else
            render json: {errors: appointments.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update 
    end 

    def destroy
    end 

    private 

    def current_user
        # get current user through User
        # find user id in the session hash
        User.find_by(id: session[:user_id])
    end

    def appointment_params
        params.permit(:date_field, :reason_for_visit)
    end

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end 

end
