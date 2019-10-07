import React, { Component } from 'react';
import './App.css';

import Navbar from './components/nabvar'
import LlamarApi from './components/llamarApi'

class App extends Component {
  state = {
    persons: [],
  }
  consultandoApi = () => {
    fetch(`https://randomuser.me/api/?results=81`)
      .then(response => response.json())
      .then(data => this.setState({ persons: data.results }))
  };

  componentDidMount() {
    this.consultandoApi()
  }

  render() {
    return (
      <>
        <Navbar total={this.state.persons.length} />
        <LlamarApi persons={this.state.persons} />
      </>
    )
  }

}

export default App;
