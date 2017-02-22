class LegislatorsController < ApplicationController
  def index
    legislators = Legislator.search_location(params[:lat], params[:long])
    render json: legislators, status: :ok
  end
end
