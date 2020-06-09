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

  changeFilter = (e) =>{ 

    e.preventDefault();
    e.persist();
    let newStateVal = e.target.value 
    
    this.setState((perviousState) =>{ 
       return Object.assign({}, {...perviousState}, { filters:{ 
        type: newStateVal }}  )  
    }); 

    
  }
 
  
  fetchPets = () =>{
        
        let URL = (this.state.filters.type === 'all' ? '/api/pets' : '/api/pets?type=' + this.state.filters.type) 
        fetch(URL).then(res => res.json())
          .then(data => {  
             this.setState({
               pets: data
             })
          
  }) }  
  
  onAdoptPet = (event) =>{  
    debugger //pets is event data being passed up. it should exist 
    let id = event.target.parentElement.id
    let adoptedPet = this.state.pets.filter(pet => pet.id === id)
    adoptedPet[0].isAdopted = true;
    debugger
    this.setState((previousState) =>{ 
      
     return { ...previousState.pets = this.state.pets }
    }); 
    console.log(this.state.pets)
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
              <Filters onChangeType={(e) => this.changeFilter(e)} 
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column"> 
              
              <PetBrowser  pets={this.state.pets} onAdoptPet={this.onAdoptPet }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


