import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {   
  makePets = () =>{ 
    
      let petsArray = this.props.pets  
    return petsArray.map((pet, i) => <Pet key={pet.id} onAdoptPet={this.props.onAdoptPet} petId={pet.id}pet={pet} />)
    
    
  } 


  render() { 
    return <div className="ui cards">{this.makePets()}</div>
  }
}

export default PetBrowser 
let pet1 = [{ name: "rufus", age: 10 }, { name: "roxy", age: 3 }]
PetBrowser.defaultProps = { pets: pet1 }