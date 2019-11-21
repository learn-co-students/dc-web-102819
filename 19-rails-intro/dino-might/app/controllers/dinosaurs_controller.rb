class DinosaursController < ApplicationController
    def index
        @dinosaurs = Dinosaur.all
        erb :'dinos2'
    end
end
