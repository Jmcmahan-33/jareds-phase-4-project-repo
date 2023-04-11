class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    # log in 
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
      end
    #   log out
      def destroy
        session.delete :user_id
        head :no_content
      end
    
    
end
