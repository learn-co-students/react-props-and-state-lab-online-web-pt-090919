import React from 'react'

class Pet extends React.Component { 
   
  render() { 
    

    return (
      <div className="card">
        <div className="content">
           <a className="header"> 
            { this.props.pet.gender === 'female' ? '♀' : '♂' } 
            <br/>
            {this.props.pet.name}
          </a>  
          
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description" >
            <p>Age:{this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content" id={this.props.petId}> 
          {this.props.pet.isAdopted ? 
            <button className="ui disabled button" style={{color: "red"}}><h1>Already adopted</h1></button> 
          :
            <button className="ui primary button" onClick={()=> this.props.onAdoptPet(this.props.petId)} >Adopt pet</button> 
  }
        </div>
      </div>
    )
  }
}

export default Pet
let petProp = { name: "rufus", id: 1234, gender: "f", adopted: false }
Pet.defaultProps = { pet: petProp }