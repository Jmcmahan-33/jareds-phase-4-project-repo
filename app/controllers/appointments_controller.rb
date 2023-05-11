class AppointmentsController < ApplicationController
    before_action :find_appointment, except: [:index, :create]
   
    def index 
        appointments = @current_user.appointments
        render json: appointments
    end

    def create
        appointment = @current_user.appointments.create!(appointment_params)
        render json: appointment 
       
    end

   
    def show
        render json: @appointment
    end

    def update
         @appointment
         @appointment.update(appointment_params)
         render json: @appointment
       
    end

    def destroy
        @appointment
        @appointment.destroy
        head :no_content
       
    end

  
    private 
 
    def appointment_params
        params.permit(:date_field, :reason_for_visit, :doctor_id)
    end
  
    def find_appointment
        @appointment = @current_user.appointments.find_by(id: params[:id])
        render json: { error: "Appointment not found" }, status: :not_found unless @appointment
    end

end

# final 
