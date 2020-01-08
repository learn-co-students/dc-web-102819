import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  // Should fire upon selecting a filter from the dropdown, and change the filter type in state
  onChangeType = (event) => {
    const newType = event.target.value
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  onFindPetsClick = () => {
    const type = this.state.filters.type
    let url = '/api/pets'
    // '/api/pets?type=dogs'
    if (type !== "all") {
      url += `?type=${type}`
    }

    
    fetch(url)
      .then(res => res.json())
      .then(newPets => {
        this.setState({
          pets: newPets
        })
      })
  }

  onAdoptPet = (id) => {
    console.log('please adopt me. im adorable')
    const newPetsArray = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      } 
      return pet
    })
    this.setState({
      pets: newPetsArray
    })
  }

  render() {
    if (true) {
      console.log('hi')
    }
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} potatoes={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
