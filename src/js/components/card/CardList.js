import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const StyledCardList = styled.div`
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
  
`

const CardList = ({users}) => {
  /**
   * A map function returns each object in the array and optionally an index
   * Every Array should have a key property in React
   */
  const cardContainer = users.map((user,index) => {
    return <Card 
              id={users[index].id} 
              name={users[index].name} 
              username={users[index].username} 
              email={users[index].email}
            /> 
  })
  
  return(
    <StyledCardList>
      {cardContainer}
    </StyledCardList>
  );
}

export default CardList;