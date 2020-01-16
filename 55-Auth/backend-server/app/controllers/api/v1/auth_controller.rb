class Api::V1::AuthController < ApplicationController

  def create # POST /api/v1/login
    userInstance = User.find_by(username: params[:username])
    if userInstance
    #user with this username exists
      if userInstance.authenticate(params[:password])
        #user exists AND password is a match
        token = encode({user_id: userInstance.id})
        render json: {
          user: userInstance,
          jwt: token
        }, status: :accepted
      else
        #user exists, but password is incorrect
        render json: {
          error: true,
          message: "Incorrect password!"
        }, status: :unauthorized
      end
    else
      #username not found
      render json: {
        error: true,
        message: "Invalid username"
      }, status: :payment_required
    end
  end

end


# @user = User.find_by(username: params[:username])
# if @user && @user.authenticate(params[:password])
# end
