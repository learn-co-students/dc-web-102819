class ApplicationController < ActionController::Base


    def get_current_user
        User.find_by(username: session[:username])
    end

    def logged_in?
        !!get_current_user
    end

    def authorized
        redirect_to login_path unless logged_in?
    end

end
