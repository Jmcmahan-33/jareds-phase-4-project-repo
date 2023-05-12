Rails.application.routes.draw do
  # get "/appointments/by_doctor/:doctor_id", to: "appointments#by_doctor"
  resources :appointments
  resources :users
  resources :doctors

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # final
end

# get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
