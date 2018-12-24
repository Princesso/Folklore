import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div `
    height:50px;
    width: 100%;
    margin-bottom: 3%;
    padding: 10px;

    h2{
        text-align:center;
        color: aquamarine ;
        font-size: 3em;
    }

    @media only screen and (max-width: 768px) {
      margin-bottom: 15%;
    }
`

const Header = () => {
    return(
        <StyledHeader>
            <h2>Friends Zone</h2>
        </StyledHeader>
    )
}

export default Header