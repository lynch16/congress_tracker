class StatesController < ApplicationController
  def index
    states = State.find_all()
    render json: states, status: :ok
  end

  def show
    state = State.find(params[:id])
    render json: state
  end
end
