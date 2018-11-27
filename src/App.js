import React, { Component } from 'react';
import CardList from './js/components/card/CardList'
import Header from './js/components/header'
import {users} from '../src/js/mockdata/users'
import styled from 'styled-components'

const StyledApp=styled.div`

`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <div className="App">
        <Header/>    
            <CardList users={users}/>  
      </div>
    </StyledApp>
    );
  }
}

export default App;
