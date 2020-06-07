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

    let urlEnd
    if (this.state.filters.type === 'all'){
      urlEnd = ''
    } else {
      urlEnd = `?type=${this.state.filters.type}`
    }

    fetch('/api/pets'+urlEnd)
    .then(resp => resp.json())
    .then(pets => this.setState({ pets: pets }))
  }

  handleChangeType = (e) => {
    this.setState({
      filters: {
        ...this.state.filters, type: e.target.value
      }
    })
  }

  handleAdoptPet = (petID) => {
    let showPets = this.state.pets.map(pet => {
      return pet.id === petID ? {...pet, isAdopted: true} : pet
    })
    this.setState({
      pets: showPets
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
