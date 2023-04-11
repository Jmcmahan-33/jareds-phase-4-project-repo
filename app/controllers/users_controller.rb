class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    # may take out line 4, just testing.
    # skip_before_action :authorize, only: :index

    # def index
    #     users = User.all
    #     render json: users
    # end 

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
        render json: user
    end 

    private
    def user_params
        params.permit(:full_name, :age, :username, :password, :password_confirmation) 
    end
end

# lines below are for show if needed. 
# if user
#     render json: user
# else
#     render json: {error: "Not Authorized"}, status: :unauthorized
# end