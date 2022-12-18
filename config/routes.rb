Rails.application.routes.draw do
  root 'welcome#index'

  get '/visitors_counter', to: 'welcome#visitors_counter'
end
