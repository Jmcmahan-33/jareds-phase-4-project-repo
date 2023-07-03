class AppointmentsController < ApplicationController
    before_action :find_appointment, except: [:index, :create]
    # skip_before_action :authorize, only: [:appointments_with_mutant]
    # def appointments_with_mutant
    #     user = User.find_by(params[:id])
    #     appointments = user.appointments.filter {|a| a.reason_for_visit.include?("Mutant")}
    #     render json: appointments 
    # end 
     # want to see appointments that belong to the user that has the word "Mutant"  in  reason for visit




# sessions talk about cookies
# Authenticate method
# bcrypt



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

  
    
    
   
  


   