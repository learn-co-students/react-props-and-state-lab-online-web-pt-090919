import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {   
  makePets = () =>{ 
    
      console.log("in makePets", this.props.pets)
      let petsArray = this.props.pets  
    return petsArray.map((pet, i) => <Pet key={i} clicked={(e) =>{
      debugger
      this.props.onAdoptPet(e)/*this.adoptME(e)*/}} petId={pet.id}  pet={pet} />)
    
    
  } 

  adoptME = (event) =>{  
    
    event.persist()
    let petEvent = event
    let id = petEvent.target.parentElement.id 
    let adoptedPet = this.props.pets.filter(pet => pet.id === id)
    adoptedPet[0].isAdopted = true;   
    debugger
    this.props.onAdoptPet()(this.props.pets)  
    
    
  }
  render() { 
    return <div className="ui cards">{this.makePets()}</div>
  }
}

export default PetBrowser 
let pet1 = [{ name: "rufus", age: 10 }, { name: "roxy", age: 3 }]
PetBrowser.defaultProps = { pets: pet1 }