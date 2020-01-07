App => activePainting, searchValue
 |- Header(Navbar)
 |  |- Searchbar
 |
 |- PaintingsContainer
    |- Details
    |- Painting
      ...

# Goal
- add a live searchbar
- while I type, I live filter the list of paintings that our app displays

state = {
  activePainting: {}
}

## What about the DOM will be changing
state = {
  searchValue: "Gold",
}
 - displayedPaintings: [] //always derive this value from searchValue and paintingsData

 We already have a variable called paintingsData this is our [100] paintings

## Design the most minimal but complete representation of state
 - as few key values pairs in state possible
 - if you need more data, you can derive

## Controlled Forms and Event Callback handlers
- State represent things on your DOM that can change
- Forms are things on the DOM that can change

A good practice is to have all forms/inputs control state
 - and in turn, the state should control the form!
 - no more document.querySelector to get values because data is always in the state!




### Mod 3 Thinking:
 - When <some event> happens, I want to manipulate the DOM <how>?

### Mod 4 Thinking:
 - When <some event> happens, I want to manipulate state in order to manipulate the DOM



## On Your Own
- practice working with other input types (textarea, select, checkbox, radio button)
- https://reactjs.org/docs/forms.html

## Upcoming Lab Review - Animal Lab (Combining It All)





















`<div className="right menu">
  <div className="item">
    <input className="ui search" placeholder="Search..." />
  </div>
</div>`
