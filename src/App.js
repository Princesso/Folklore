import React, { Component } from 'react';
import Card from './js/components/card/Card'
import Header from './js/components/header'
import {users} from '../src/js/mockdata/users'
import styled from 'styled-components'

const StyledApp=styled.div`
  display : flex;
  .card-container{
    display: flex;
    allign-items: center;
    flex-wrap: wrap;
    margin: 2px 10px;
  }

`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <div className="App">
        <Header/> 
          <div className="card-container">
            <Card id={users[0].id} name={users[0].name} username={users[0].username} email={users[0].email}/> 
            <Card id={users[1].id} name={users[1].name} username={users[1].username} email={users[1].email}/> 
            <Card id={users[2].id} name={users[2].name} username={users[2].username} email={users[2].email}/> 
            <Card id={users[3].id} name={users[3].name} username={users[3].username} email={users[3].email}/> 
          </div>
      </div>
    </StyledApp>
    );
  }
}

export default App;
