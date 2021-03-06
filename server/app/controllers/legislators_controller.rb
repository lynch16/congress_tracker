class LegislatorsController < ApplicationController
  before_action :set_legislator, only: [:show, :upvote, :downvote, :comment]
  def index
    if (!!params[:lat] && !!params[:long])
      legislators = Legislator.search_location(params[:lat], params[:long])
    elsif (!!params[:state])
      legislators = Legislator.search_by_state(params[:state])
    end
    render json: legislators, status: :ok
  end

  def show
    render json: @legislator.to_json(include: [:comments]), status: :ok
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
    render json: @legislator.to_json(include: [:comments]), status: :ok
  end

  private
  def set_legislator
    @legislator = Legislator.find(params[:id])
  end
end
