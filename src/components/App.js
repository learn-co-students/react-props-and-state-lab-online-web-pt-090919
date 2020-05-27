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
      },
      isAdopted: false
    }
  }

onChangeType = () => {
  this.setState(prevState => ({
    ...prevState, filters: {
      ...prevState.filters, type: 'cat'
    }
  }))
}

onAdoptPet = (event) => {
 const found = this.state.pets.find(pet => pet.id === event.id)
 this.setState(prevState => {
   return {isAdopted: true}
 })
}

onFindPetsClick = () => {
  if (this.state.filters.type === 'all') {
  fetch("/api/pets")
  .then(resp => resp.json())
  .then(data => {
    this.setState({pets: data})
  })
  .catch(err => console.log(err))
  } else if (this.state.filters.type === 'cat'){
     fetch("/api/pets?type=cats")
  .then(resp => resp.json())
  .then(data => {
    this.setState({pets: data})
  })
  .catch(err => console.log(err))
  } else if (this.state.filters.type === 'dog') {
     fetch("/api/pets?type=dog")
  .then(resp => resp.json())
  .then(data => {
    this.setState({pets: data})
  })
  .catch(err => console.log(err))
  } else if (this.state.filters.type === 'micropig'){
     fetch("/api/pets?type=micropig")
  .then(resp => resp.json())
  .then(data => {
    this.setState({pets: data})
  })
  .catch(err => console.log(err))
  }
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
              <Filters onChangeType={this.onChangeType} data={this.state}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onFindPetsClick={this.onFindPetsClick} onAdoptPet={event => this.onAdoptPet(event)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
