import React from 'react'

function Nabvar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <span>Total Cards: </span>{props.persons}
      </a>
    </nav>
  )

}

export default Nabvar;
