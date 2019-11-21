class DinosaursController < ApplicationController
    def index
        @dinosaurs = Dinosaur.all
        # Rendering index.erb is handled implicitly. No need for line below.
        render :index
    end
end
