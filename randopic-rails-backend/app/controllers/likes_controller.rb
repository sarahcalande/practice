class LikesController < ApplicationController

  def create
    @like = Like.create(image_id: params[:image_id])
    render json: @like
  end

end
