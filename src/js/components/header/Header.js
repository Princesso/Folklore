import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div `
    height:50px;
    width: 100%;
    margin: 10px;
    padding: 10px;

    h2{
        text-align:center;
    }
`

const Header =() =>{
    return(
        <StyledHeader>
            <h2>Lorea Corporation</h2>
        </StyledHeader>
    )
}

export default Header