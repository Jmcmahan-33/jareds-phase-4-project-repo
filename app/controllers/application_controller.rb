class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  # q: why can't I make a patch request to update an appointment?
  # a:

  # q: why I'm not authorized when I try to make a patch request to update an appointment?
  # a: because I'm not logged in

  # q: why am I not logged in?
  # a: because I'm not sending a cookie with the request

  # q: how do I send a cookie with the request?
  # a: by setting the credentials: 'include' option in the fetch request

  # q: how do I set the credentials: 'include' option in the fetch request?
  # a: by adding the credentials: 'include' option to the fetch request
  # q: show how to add the credentials: 'include' option to the fetch request
  # a: fetch("http://localhost:3000/appointments", {
  #   method: "PATCH",
  #   headers: {
  #     "Content-Type": "application/json",
  #     "Accept": "application/json"
  #   },
  #   body: JSON.stringify({
  #     date_field: "2021-01-01",
  #     reason_for_visit: "I'm sick",
  #     doctor_id: 1
  #   })
  # })
  

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized from app controller"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end


end
