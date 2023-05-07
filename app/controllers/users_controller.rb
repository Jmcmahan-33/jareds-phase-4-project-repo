class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        users = User.all
        render json: users
    end

    # signup 
    def create
        # create the user(signup)
        user = User.create!(user_params)
        # save the newly created id to a session hash
        session[:user_id] = user.id 
        # return json 
        render json: user, status: :created
    end
    def show
        # get current user 
        user = User.find_by(id:session[:user_id])
        # render json 
        render json: user, status: :ok
        # render json: @current_user
    end 

    private
    def user_params
        params.permit(:full_name, :age, :username, :password, :password_confirmation) 
    end
end

