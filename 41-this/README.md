## Object Oriented JavaScript: `this`
- JS isn't really OO, but over they years, developers have found ways to mimic OO

### JS `this` vs Ruby `self`
- `this` in the browser
- `self` in irb

#### Differences
- the value of `this` changes depending on which object the function is invoked from
- implied `this` for all functions
- `this` is also known as the execution context
  - object!
  - window! / undefined
  - HTML node!


### Quick Aside: Strict Mode
- undeclared variables not allowed
- `this` inside a function is undefined

### `bind`
- bind returns a new function where the value of `this` is pre-set

### `this` has strange behavior inside object methods
- this is always determined by the object to the left of the '.'
- inside arrow functions, `this` takes on the value of the outer scope's `this`




## Main take aways
- `this` is a lot of Ruby's `self` except when it's not
- Like Ruby's `self`, the value of `this` represents the object you are currently "on"
- When it's not, you can bind the value of `this` using .bind() of arrow functions
