import React, { Component } from 'react';
import './App.css';

import Navbar from './components/nabvar'
import LlamarApi from './components/llamarApi'
import AddPerson from './components/buttonAdd'

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
  addCard = () => {
    fetch(`https://randomuser.me/api/`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        const persons = [...data.results, ...this.state.persons]
        this.setState({ persons })
      })
      .catch(error => { alert('Ha ocurrido un error', error) })
  }
  removeCard = (removeIndex) => {
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
        <AddPerson addCard={this.addCard} />
        <LlamarApi
          persons={this.state.persons}
          deleteCard={this.removeCard}
        />
      </>
    )
  }

}

export default App;
