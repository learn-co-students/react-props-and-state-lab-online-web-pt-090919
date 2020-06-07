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

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    const petQuery = (this.state.filters.type === "all") ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`;
    fetch(petQuery)
    .then(response => response.json())
    .then(data => this.setState({pets: Array.from(data)}))
  }

  onAdoptPet = (id) => {
    const found = this.state.pets.find(pet => pet.id === id)
    found.isAdopted = true
    this.setState({filters: this.state.filters})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
