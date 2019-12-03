Rails.application.routes.draw do
  get '/whatever', to: "snacks#home", as: "home"
  get '/fun', to: "snacks#my_super_fun_page"
  # get '/snacks', to: "snack#index", as: "snacks"
  # get '/snacks/:id', to: "snack#show", as: "snack"
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
