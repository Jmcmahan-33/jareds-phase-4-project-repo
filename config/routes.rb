Rails.application.routes.draw do
  
  resources :appointments
  resources :users
  resources :doctors
  # get "/signup", to: "users#create"
  get "/appointments", to: "appointments#index"
  post "/signup", to: "users#create"
  patch "/appointment/:id", to: "appointments#update"
  # post "/appointment-form", to: "appointments#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  patch "/appointment/:id", to: "appointments#show"
  # post "/doctor-form", to: "doctors#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
