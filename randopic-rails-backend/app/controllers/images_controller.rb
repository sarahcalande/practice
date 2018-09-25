class ImagesController < ApplicationController

  def index
    @image = Image.find(1 + rand(200))
    render json: @image
  end

  def show
    @image = Image.find(params[:id])
    render json: @image
  end



end
