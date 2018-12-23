import React, { Component } from 'react';
import CardList from './js/components/card/CardList'
import Header from './js/components/header'
import {users} from '../src/js/mockdata/users'
import styled from 'styled-components'
import SearchButton from '../src/js/components/searchbox'

const StyledApp=styled.div`

`

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: users,
      searchlist: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchlist: event.target.value}) 
    const filteredRobots = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchlist.toLowerCase())
    })
    console.log(filteredRobots)
  }
  render() {
    return (
      <StyledApp>   
        <Header/>    
        <SearchButton searchChange = {this.onSearchChange}/>
        <CardList users={this.state.users}/>  
        
    </StyledApp>
    );
  }
}

export default App;
