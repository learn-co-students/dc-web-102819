Rails.application.routes.draw do
  resources :visits, only: [:new, :create]
  # resources :locations
   resources :users
  
end
