class LegislatorsController < ApplicationController
  def index
    legislators = Legislator.search_location(params[:lat], params[:long])
    render json: legislators, status: :ok
  end

  def show
    legislator = Legislator.find(params[:id])
    render json: legislator, status: :ok
  end

  def upvote
    a = Legislator.find(params[:id])
    a.upvote
    render json: a, status: :ok
  end

  def downvote
    a = Legislator.find(params[:id])
    a.downvote
    render json: a, status: :ok
  end
end
