class WelcomeController < ApplicationController
  def index
  end

  def visitors_counter
    respond_to do |format|
      format.json { render json: { counter: ActionCable.server.connections.length } }
    end
  end
end
