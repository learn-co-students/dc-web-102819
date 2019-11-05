# collect / map

goes over an entire collection (array, hash) and does the same thing
to every element.  The return value will always be the same length as 
the input value's length

# select
goes over an entire collection (array, hash) and chooses only the ones
that match some criteria

Ex:

```rb
arr = [1, 2, 3, 4, 5]

times_ten = arr.map do |num|
    num * 10
end

puts times_ten
# [10, 20, 30, 40, 50]


bigger_than_three = arr.select do |num|
    num > 3
end

puts bigger_than_three
# [4, 5]

puts arr 
# [1, 2, 3, 4, 5]
```