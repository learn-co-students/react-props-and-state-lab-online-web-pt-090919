import React from 'react'

class Pet extends React.Component {
  onAdoptPetClick = () => {
    const { pet, onAdoptPet } = this.props;
    const petId = pet.id;
    onAdoptPet(petId);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* if the pet is adopted, show the disabled button.  */}
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              // callback prop gets called with the pet's id
              onClick={this.onAdoptPetClick}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
