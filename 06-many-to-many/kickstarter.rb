require 'pry'

class Backer

    attr_accessor :backed_projects, :name
    # .name 
    # .name=
    # .backed_projects
    # .backed_projects=

    def initialize(name)
        @name = name
        @backed_projects = []
    end

    def back_project(project)
        self.backed_projects << project
        project.backers << self
    end

    def unback_project(project)
        self.backed_projects.delete(project)
    end
end

class Project

    attr_accessor :backers, :name

    def initialize(name)
        @name = name
        @backers = []
    end

    def add_backer(backer)
        backer.backed_projects << self
        self.backers << backer
    end

end

hoverboard = Project.new('Hoverboard')
marty = Backer.new("Marty McFly")

marty.back_project(hoverboard)
marty.unback_project(hoverboard)
binding.prye

