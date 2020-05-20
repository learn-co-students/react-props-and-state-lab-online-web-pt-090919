import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({ 
        ...this.state,
          filters: {
            type: event.target.value
          }
       });
  }

  onFindPetsClick = event => {
    let url = "/api/pets"
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url) 
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        }, () => console.log(this.state))
      })
  }

  onAdoptPet = (petId) => {
    let petsArrCopy = [...this.state.pets]
    const thisPet = petsArrCopy.find(pet => pet.id === petId)
    thisPet.isAdopted = true

    this.setState({
      pets: petsArrCopy
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
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
