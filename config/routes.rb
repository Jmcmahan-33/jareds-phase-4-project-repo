Rails.application.routes.draw do
  
  resources :appointments
  resources :users
  resources :doctors
  get "/signup", to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
