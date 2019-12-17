class TrainersController < ApplicationController
    def index
        trainers = Trainer.all
        # byebugs
        render json: trainers.to_json(:only=> [ :id, :name],
            :include => [
                :pokemons => {
                    :except => [:created_at, :updated_at]
                }
            ])
    end
end
