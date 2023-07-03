Rails.application.routes.draw do
 
  get "/users/:id/mutant_appointments", to: "appointments#appointments_with_mutant"
  # want to see appointments that belong to the user that has the word "Mutant"  in  reason for visit
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
