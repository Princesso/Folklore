import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div `
background : aquamarine ;
height: 300px;
width:200px;
border-radius: 10px;;

img{
 heigtht: 200px;
 width: 200px; 
}
`

const Card = () => {
  return(
    <StyledCard>
      <img src="https://robohash.org/princess" alt="Robot"/>
      <h3>Name</h3>
      <p>email</p>
    </StyledCard>
  )
}

export default Card