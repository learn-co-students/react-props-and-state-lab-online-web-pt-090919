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

  petsData = (newPets) => {
    const updatedPets = newPets.map((pet) => {
      return {...pet, isAdopted: false}
    })
    this.setState({
      pets: updatedPets
    })
  }

  onChangeType = (value) => {
    value.persist()
    value = value.target.value
    this.setState({
      filters: {...this.filters, type: value}
    })
  }

  onFindPetsClick = () => {
    let apiParam = this.state.filters.type
    let api
    switch (apiParam) {
      case 'all':
        api = '/api/pets';
        break;
      case 'cat':
        api = "/api/pets?type=cat";
        break;
      case 'dog':
        api = "/api/pets?type=dog";
        break;
      case 'micropig':
        api = "/api/pets?type=micropig";
        break;
      //default:  
    }
    fetch(api)
    .then(resp => resp.json())
    .then(data => this.petsData(data))
  }

  onAdoptPet = (id) => {
    console.log(id)
    let updatedPet = this.state.pets.find(pet => pet.id === id)
    updatedPet.isAdopted = true
    this.setState({
      pets: [...this.state.pets]
   })
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
            <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              />
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
