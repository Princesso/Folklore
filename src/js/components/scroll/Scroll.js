import React from 'react'
import styled from 'styled-components'

const StyledScroll = styled.div`
  overflow-y: scroll;
  border: 1px solid black;
  height: 500px;
  margin-top: 1%;
  border-radius: 9px;
`

const Scroll = (props) => {
  return(
    <StyledScroll>
      {props.children}
    </StyledScroll>
  )
}

export default Scroll