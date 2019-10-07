import React, { Component } from 'react'

class LLamarApi extends Component {
  render() {
    console.log(this.props.persons)
    const info = this.props.persons.map((person, index) =>
      <div className="card" key={index}>
        <div className="card-header py-4">

        </div>
        <img className="card-img-top img-fluid imagen rounded-circle user_photo" src={person.picture.large} width="150" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{`${person.name.first} ${person.name.last}`}</h5>
          <p className="card-text">{`${person.name.first} tiene ${person.dob.age} años y es de ${person.location.city}`}</p>
          <a href="#" className="btn btn-danger">Delete</a>
        </div>
      </div>)
    return (
      <div className="card-columns mt-3 ml-1 mr-1">
        <div>{info}</div>
      </div>
    )

  }
}

// function LLamarApi() {
//   return (

//   )
// }

export default LLamarApi;
