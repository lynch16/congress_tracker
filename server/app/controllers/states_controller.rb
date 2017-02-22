class StatesController < ApplicationController
  def index
    states = State.find_all_state_names()
    render json: states, status: :ok
  end

  def show
    state = State.find_districts(params[:id])
    render json: state, status: :ok
  end
end
