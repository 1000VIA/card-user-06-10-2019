import React from 'react'

function LLamarApi(props) {
  const info = props.persons.map((person, index) =>
    <div className="card" key={index}>
      <div className="card-header py-4">
      </div>
      <img className="card-img-top img-fluid imagen rounded-circle user_photo" src={person.picture.large} width="150" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{`${person.name.first} ${person.name.last}`}</h5>
        <p className="card-text">{`${person.name.first} tiene ${person.dob.age} años y es de ${person.location.city}`}</p>
        <button
          className="btn btn-danger"
          onClick={() => props.deleteCard(index)}>
          Delete
          </button>
      </div>
    </div>)
  return (
    <div className="card-columns mt-3 ml-1 mr-1">
      <div>{info}</div>
    </div>
  )
}

export default LLamarApi;

{/* <button type="submit" className="btn btn-primary">
  {this.props.editIndexTodo === -1 ? "Save" : "Edit"}
</button> */}
