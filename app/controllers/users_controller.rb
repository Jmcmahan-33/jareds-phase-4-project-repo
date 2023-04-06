class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    skip_before_action :authorize, only: :index

    def index
        users = User.all
        render json: users
    end 
    def create
        # create the user(signup)
        user = User.create!(user_params)
        # save the newly created id to a session hash
        session[:user_id] = user.id 
        # return json 
        render json: user, status: :created

    end

    private
    def user_params
        params.permit(:full_name, :age, :username, :password, :password_confirmation) 
    end
end
