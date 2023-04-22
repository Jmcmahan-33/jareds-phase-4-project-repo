Rails.application.routes.draw do
  
  resources :appointments
  resources :users
  resources :doctors
  # get "/signup", to: "users#create"
  post "/signup", to: "users#create"
  # post "/appointment-form", to: "appointments#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  get "/appointment/:id", to: "appointments#show"
  # post "/doctor-form", to: "doctors#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
