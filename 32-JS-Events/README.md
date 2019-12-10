# Event Listeners

## Asynchronous vs Synchronous?
- example: setTimeout( () => {console.log("hello one second later")} , 1000)
- example: setTimeout( () => {console.log("hello right away")}, 0)
- events are asynchronous

## .addEventListener() on a DOM node
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback is the event itself

## Example of Events
- "click"
- "mousehover"
- "keydown"
- "keyup"
- "keypress"
- "DOMContentLoaded"

## When to add an event Listener
- on load of page?
- on creation of element?

## Practice
- When click of email -> alert("would you like to send an email to ....")
- When click of submit -> add new instructor to the table

## Some events have default behavior
- event.preventDefault()

## event.currentTarget vs. event.target
- event.currentTarget: the HTML element addEventListener is attached to
- event.target: the innermost node that triggers the event

## Additional Resources
- More about how async works with the stack: https://www.youtube.com/watch?v=8aGhZQkoFbQ
