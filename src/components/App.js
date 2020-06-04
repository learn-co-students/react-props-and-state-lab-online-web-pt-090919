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

  fetchPets = () => {
    let endpoint = '/api/pets'
    if (this.state.filters.type !== 'all') {
      // optional query parameter
      endpoint += `?type=${this.state.filters.type}`
    }
    fetch(endpoint)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets: pets }));
  }

  onChangeType = event => {
    // console.log(event.target.value) // dog, cat, all, etc.
    this.setState({ filters: { ...this.state.filters, type: event.target.value } });
  }

  onAdoptPet = petId => {
    let adoptedPet = this.state.pets.find(pet => pet.id === petId)
    if (!!adoptedPet) {
      adoptedPet.isAdopted = true
    }
    this.setState({pets: this.state.pets})

    // METHOD 2:
    // const pets = this.state.pets.map(p => {
    //     return p.id === petId ? { ...p, isAdopted: true } : p;
    //   });
    //   this.setState({ pets: pets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
