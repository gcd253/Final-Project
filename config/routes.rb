Rails.application.routes.draw do
  root 'post#index'
  resources :posts
  resources :users

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"


end
