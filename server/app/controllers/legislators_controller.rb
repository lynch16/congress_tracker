class LegislatorsController < ApplicationController
  def index
    legislators = Legislator.search_location(params[:lat], params[:long])
    render json: legislators, status: :ok
  end

  def upvote
    a = Legislator.find_by(params[:id])
    a.upvote
    render json: a, status: :ok
  end

  def downvote
    a = Legislator.find_by(params[:id])
    a.downvote
    render json: a, status: :ok
  end
end
