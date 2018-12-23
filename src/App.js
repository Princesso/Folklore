import React, { Component } from 'react';
import CardList from './js/components/card/CardList'
import Header from './js/components/header'
import {users} from '../src/js/mockdata/users'
import styled from 'styled-components'
import SearchButton from '../src/js/components/searchbox'
import stylesheet from './styles/index.css'

const StyledApp=styled.div`

`

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      searchlist: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(res => { 
      this.setState({users: res})
    })
  }

  onSearchChange = (event) => {
    this.setState({searchlist: event.target.value}) 
  }
  render() {
    const filteredRobots = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchlist.toLowerCase())
    })
    return (
      <StyledApp>   
        <Header/>    
        <SearchButton searchChange = {this.onSearchChange}/>
        <CardList users={filteredRobots}/>        
    </StyledApp>
    );
  }
}

export default App;
