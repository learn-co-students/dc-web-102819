Rails.application.routes.draw do
  get 'users/new'
  get '/whatever', to: "snacks#home", as: "home"
  get '/fun', to: "snacks#my_super_fun_page"
  # get '/snacks', to: "snack#index", as: "snacks"
  # get '/snacks/:id', to: "snack#show", as: "snack"
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  resources :users, only: [:new, :create]
  
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#logout"
end
