import React from 'react'


function AddPerson(props) {
  return (
    <button className="btn btn-primary m-3 personButton"
      onClick={props.addCard}>
      Add Person
    </button>
  )
}

export default AddPerson;
