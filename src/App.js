import React, { Component } from 'react';
import CardList from './js/components/card/CardList'
import Header from './js/components/header'
//import {users} from '../src/js/mockdata/users'
import styled from 'styled-components'
import SearchButton from '../src/js/components/searchbox'
import stylesheet from './styles/index.css'
import Scroll from './js/components/scroll'
import ErrorBoundary from './js/components/error'

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
    console.log(this.props.store.getState())
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(res => { 
      this.setState({users: res})
    })
    .catch(error => {
      throw(error)
    })
  }

  onSearchChange = (event) => {
    this.setState({searchlist: event.target.value}) 
  }
  render() {
    const filteredRobots = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchlist.toLowerCase())
    })

    if (this.state.users.length === 0) {
      return <h2>Loading</h2>
    } else {
        return (
          <StyledApp>   
            <Header/>    
            <SearchButton searchChange = {this.onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList users={filteredRobots}/> 
              </ErrorBoundary>
            </Scroll>
                   
        </StyledApp>
        );
    }
  }
}

export default App;
