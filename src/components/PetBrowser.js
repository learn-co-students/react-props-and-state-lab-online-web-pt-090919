import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map(petData => <Pet onAdoptPet={this.props.onAdoptPet} pet={petData}/>)}
    </div>
  }
}

export default PetBrowser
