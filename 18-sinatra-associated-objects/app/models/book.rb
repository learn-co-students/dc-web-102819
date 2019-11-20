class Book < ActiveRecord::Base
    belongs_to :author
    
    def slug 
        self.title.parameterize
    end
end
