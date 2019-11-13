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

chine.enroll_in_course(calculus, "3/27/83")
chine.enroll_in_course(spelling, "4/15/99")
trevor.enroll_in_course(gym, "6/12/10")
trevor.enroll_in_course(spelling, "4/23/09")



binding.pry
0