Rails.application.routes.draw do
  root 'post#index'
  resources :posts
  resources :users

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
  get "/user-offers", to: "posts#my_offers"

  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create]
  mount ActionCable.server => '/cable'


end
