require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

chine = Student.new("Chine", "Anikwe")
trevor = Student.new("Trevor", "Jameson")
ann = Student.new("ann", "duong")


calculus = Course.new("Calculus 17", 90, "Really hard math")
spelling = Course.new("Spelling 101", 60, "Speling wordz is gud")
gym = Course.new("Physical Education", 120, "Running in circles")




binding.pry
0