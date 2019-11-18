class Book < ActiveRecord::Base

    def slug 
        self.title.parameterize
    end
end
