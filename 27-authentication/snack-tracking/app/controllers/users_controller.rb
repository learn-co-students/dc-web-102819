class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create 
    user = User.new(username: params[:username], password: params[:password])
    if user.valid?
        user.save
        redirect_to snacks_path
    else
        render :new
    end

  end
end
