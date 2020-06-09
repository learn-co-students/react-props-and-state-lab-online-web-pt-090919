import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {   
  makePets = () =>{ 
    
      console.log("in makePets", this.props.pets)
      let petsArray = this.props.pets  
    return petsArray.map((pet, i) => <Pet key={i} onAdoptPet={this.props.onAdoptPet/*this.adoptME(e)*/} petId={pet.id}  pet={pet} />)
    
    
  } 


  render() { 
    return <div className="ui cards">{this.makePets()}</div>
  }
}

export default PetBrowser 
let pet1 = [{ name: "rufus", age: 10 }, { name: "roxy", age: 3 }]
PetBrowser.defaultProps = { pets: pet1 }