class CommentsController < ApplicationController

  def create
    # change parameter from `comment` to `content` in student readme
    @comment = Comment.create(content: params[:content], image_id: params[:image_id])

    # change response in student readme
    
    render json: @comment
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    # change response in student readme
    render json: {message: 'Comment Successfully Destroyed'}
  end


end
