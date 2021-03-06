Rails.application.routes.draw do
  root  'home#index'
  resources :states
  resources :legislators
  get 'legislators/:id/upvote', to: 'legislators#upvote'
  get 'legislators/:id/downvote', to: 'legislators#downvote'
  post 'legislators/:id/comment', to: 'legislators#comment'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
