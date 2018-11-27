import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div `
background : aquamarine ;
height: 300px;
width:200px;
border-radius: 10px;
margin:10px;
padding: 10px;
:hover {
  transform: scale(1.1)
}

img{
 heigtht: 200px;
 width: 200px; 
}
`

const Card = (props) => {
  return(
    <StyledCard>
      <img src={`https://robohash.org/${props.id}`} alt="Robot"/>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </StyledCard>
  )
}

export default Card