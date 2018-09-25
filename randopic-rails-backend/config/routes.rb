Rails.application.routes.draw do

  resources :likes, only: [:create]
  resources :comments, only: [:create, :destroy]
  resources :images, only: [:index, :show, :update]

  get '/admin/dont-use-this-route/reset_to_seed', to: 'application#reset_to_seed'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
