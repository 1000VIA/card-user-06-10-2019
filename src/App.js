import React, { Component } from 'react';
import './App.css';

import Navbar from './components/nabvar'
import LlamarApi from './components/llamarApi'

class App extends Component {
  state = {
    persons: [],
  }
  consultandoApi = () => {
    fetch(`https://randomuser.me/api/?results=20`)
      .then(response => response.json())
      .then(data => this.setState({ persons: data.results }))
      .catch(error => { alert('Ha ocurrido un error', error) })
  };

  componentDidMount() {
    this.consultandoApi()
  }

  removeBotton = (removeIndex) => {
    const arrPersons = this.state.persons;
    const filterCard = arrPersons.filter((person, index) => index !== removeIndex
    )
    this.setState({
      persons: filterCard
    })
  }

  render() {
    return (
      <>
        <Navbar persons={this.state.persons.length} />
        <LlamarApi persons={this.state.persons} deleteCard={this.removeBotton} />
      </>
    )
  }

}

export default App;
