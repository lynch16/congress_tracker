class LegislatorsController < ApplicationController
  before_action :set_legislator, only: [:show, :upvote, :downvote, :comment]
  def index
    legislators = Legislator.search_location(params[:lat], params[:long])
    render json: legislators, status: :ok
  end

  def show
    render json: @legislator.to_json(incldue: [:comments]), status: :ok
  end

  def upvote
    @legislator.upvote
    render json: @legislator, status: :ok
  end

  def downvote
    @legislator.downvote
    render json: @legislator, status: :ok
  end

  def comment
    @legislator.comment(params[:comment], params[:author])
    binding.pry
    render json: @legislator.to_json(incldue: [:comments]), status: :ok
  end

  private
  def set_legislator
    @legislator = Legislator.find(params[:id])
  end
end
