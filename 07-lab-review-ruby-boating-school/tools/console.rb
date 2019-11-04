require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

spongebob = Student.new('Sponge Bob')
patrick = Student.new('Patty')

puff = Instructor.new('Ms. Puff')

test1 = BoatingTest.new(spongebob, "Parallel Parking 101", "failed", puff)
spongebob.add_boating_test("Loopty Loop 201", "passed", puff)

spongebob.grade_percentage

puff.pass_student(spongebob, "Parallel Parking 101")
puff.pass_student(patrick, "Parallel Parking 101")

binding.pry
0 #leave this here to ensure binding.pry isn't the last line

