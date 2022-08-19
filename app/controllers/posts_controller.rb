class PostsController < ApplicationController
  before_action :set_post, only: %i[ show edit update destroy ]

  # GET /posts
  def index
    @posts = Post.all.with_attached_image
    render json: @posts.map { |post|
      post.as_json.merge({ image: url_for(post.image) })
    }.reverse, status: :ok
    #PostandimageSerializer.new(@posts).serializable_hash[:data][:attributes]
  end

  # GET /posts/1
  def show
    post = Post.find(params[:id])
    user = post.user.username
    render json: PostandimageSerializer.new(@post).serializable_hash[:data][:attributes], include: :user
  end

  # POST /posts
  def create
    @post = Post.create!(post_params)
    render json: PostandimageSerializer.new(@post).serializable_hash[:data][:attributes]
  end

  # PATCH/PUT /posts/1
  def update
    @post.update!(post_params)
    redirect_to @post, notice: "Post was successfully updated."
  end

  # My offers
  def my_offers
    posts = Post.where(user_id: session[:user_id]).with_attached_image
    render json: posts.map { |post|
      post.as_json.merge({ image: url_for(post.image) })
    }.reverse
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
    redirect_to posts_url, notice: "Post was successfully destroyed."
  end

private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:name, :description, :user_id, :condition, :category, :image, :id)
    end
  
end
