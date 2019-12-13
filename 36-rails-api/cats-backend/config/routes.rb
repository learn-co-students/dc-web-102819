Rails.application.routes.draw do
    resources :cats, only: [:index, :create]
    resources :hobbies, only: [:index]
end
