
# For each of the following examples, write two methods that solve the 
# problem:  One that uses `.each` and one that uses one of the higher level 
# iterator methods

# Remember:

# map/collect:  Returns an array where each value of the original array 
# corresponds to an element in the new array

# find/detect:  Returns the first element for which the statement in the block
# evaluates as True

# select/find_all:  Returns an array of _all_ elements for which the statement in
# the block evaluates as True

nums = (1..20).to_a #creates an array of all numbers from 1-20

# 1.  Create an array of numbers where each new number is three times as big as
# its original number (e.g., [3, 6, 9])

def multiply_with_each(arr)
    answer = []
    arr.each do |num|
        answer << num * 3
    end 
    return answer
end

# print multiply_with_each(nums)

def multiply_with_map(arr)
    # multiples = arr.map do |num|
    #     num * 3
    # end
    # return multiples
    arr.map {|num| num * 3}
end

# print multiply_with_map(nums)

# 2.  Find the first number that is divisible by 7

def first_with_each(arr)
    answer = nil
    arr.each do |num| 
        if num % 7 == 0
            answer = num 
        end
    end
    return answer
end

def first_with_find(arr)
    arr.find {|num| num % 7 == 0}
end

# puts first_with_find(nums)

# 3.  Find all numbers that are divisible by 7

def all_divis_by_7(arr)
    arr.select {|num| num % 7 == 0}
end

# print all_divis_by_7(nums)

# 4.  Find the first number that is divisible by 7 AND greater than 10

def big_divis_by_7(arr)
    arr.find do |num| 
        num % 7 == 0 && num > 10
    end
end

# print big_divis_by_7(nums)
# Bonus:


# 5.  Create an array of the squares (the number times itself) of all numbers
# that are divisible by 7

def big_divisible_by_squares(nums)
    sevens = all_divis_by_7(nums)

    sevens.map do |num|
        num ** 2 
    end
end

print big_divisible_by_squares(nums)