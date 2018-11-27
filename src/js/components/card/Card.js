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
  const {id, name, email} =props
  return(
    <StyledCard>
      <img src={`https://robohash.org/${id}`} alt="Robot"/>
      <h3>{name}</h3>
      <p>{email}</p>
    </StyledCard>
  )
}

export default Card