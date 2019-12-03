class SessionsController < ApplicationController

    def new
        if session["username"]
            redirect_to snacks_path
        else
            render :new
        end

    end

    def create
        username = params[:username]
        user = User.find_by(username: username)
        if user
            session["username"] = user.username
            redirect_to snacks_path
        else
            flash["error"] = "No user found with that name"
            redirect_to login_path
        end
    end

    def logout
        session.clear
        redirect_to login_path
    end
end
