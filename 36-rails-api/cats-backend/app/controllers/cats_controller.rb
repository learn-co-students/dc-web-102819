class CatsController < ApplicationController

    def index
        cats = Cat.all 
        # cat_hobbies = cats.map do |cat|
        #     {cat: cat, hobbies: cat.hobbies}
        # end
        # render json: cat_hobbies
        render json: cats.to_json(serialized_data)
    end

    def create
        kitty = Cat.create(cat_params)
        render json: kitty.to_json(serialized_data)
    end

    private

    def cat_params
        params.require(:cat).permit(:name, :img)
    end

    def serialized_data
        {:except => [:created_at, :updated_at],
                :include => {:hobbies =>
                    {:except => [:created_at, :updated_at]}
                }}
    end
end
