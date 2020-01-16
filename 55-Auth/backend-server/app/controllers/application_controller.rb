class ApplicationController < ActionController::API
  def secret_key
    Rails.application.secrets.secret_key_base
  end

  #want a way to generate a token given a payload
  def encode(payload)
    #return a token
    JWT.encode(payload, secret_key, "HS512")
  end

  #want a way to get the payload given the token
  def decode(token)
    JWT.decode(token, secret_key, true, {algorithm:"HS512"})[0]
  end
end
