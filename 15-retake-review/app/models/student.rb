class Student

    def initialize(first_name, last_name)
        @first_name = first_name
        @last_name = last_name
    end

    def first_name
        return @first_name
    end

    def last_name # name of method
        # the instance variable 
        # representing this specific student's last_name
        return @last_name 
    end

    def name # returns the student's full name e.g., "Trevor Jameson"

    end

end