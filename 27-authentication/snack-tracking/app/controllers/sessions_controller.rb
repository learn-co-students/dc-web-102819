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
        if user && user.authenticate(params[:password])
            session["username"] = user.username
            redirect_to snacks_path
        else
            flash["error"] = "No user found with that name and password"
            redirect_to login_path
        end
    end

    def logout
        session.clear
        redirect_to login_path
    end


end
