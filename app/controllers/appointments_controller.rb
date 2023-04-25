class AppointmentsController < ApplicationController
   before_action :authorize

    def index 
        appointments = current_user.appointments
        render json: appointments
    end

    def create
        appointment = current_user.appointments.create(appointment_params)
        render json: appointment 
       
    end
    # q: why does show not work in the browser?

    def show
        render json: appointment
    end

    # q: how can I not duplicate doctors when creating an appointment?
    # a:

 


    # def show
    #     appointment = current_user.appointments.find_by(id: params[:id])
    #     if appointment 
    #         render json: appointment
    #     else
    #         render json: {errors: "Not Found"}, status: :unauthorized
    #     end
    # end 

    def update
            appointment.update(appointment_params)
            render json: appointment
    end

 

    def destroy
        user = current_user
        if user
            appointment = Appointment.find_by_id(params[:id]) #?unxepeted Unexpected end of JSON input
            appointment.destroy
            head :no_content
        end
    end
    # q: why is the delete method undifined?
    # a: because you are not using the find_appointment method
    private 

    def current_user
        # get current user through User
        # find user id in the session hash
        User.find_by(id: session[:user_id])
    end

    # def find_appointment
    #   appointment = @current_user.appointments.find_by(id: params[:id])
    #   render json: { error: "Appointment not found" }, status: :not_found unless appointment
    # end

    def appointment_params
        params.permit(:date_field, :reason_for_visit, :doctor_id)
    end

    # def authorize
    #     return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    # end 

end
