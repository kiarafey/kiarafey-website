class MainChannel < ApplicationCable::Channel
  def subscribed
    ActionCable.server.broadcast("main", { counter: ActionCable.server.connections.length })
  end

  def unsubscribed

  end

  def count

  end
end