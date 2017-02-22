class StatesController < ApplicationController
  def index
    states = State.find_all_state_names()
    render json: states, status: :ok
  end

  def show
    state_districts = State.find_districts(params[:id])
    render json: state_districts, status: :ok
  end
end
