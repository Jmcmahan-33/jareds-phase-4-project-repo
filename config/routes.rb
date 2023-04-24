Rails.application.routes.draw do
  
  resources :appointments
  resources :users
  resources :doctors

  # appointments routes
  get "/appointments", to: "appointments#index"
  patch "/appointment/:id", to: "appointments#update"
  # users routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # doctors routes
  post "/doctors", to: "doctors#create"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
