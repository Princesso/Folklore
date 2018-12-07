import React from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  margin:20px;
  padding: 2px;

  .search-box {
    background: blue;
  }
`

const Search = ({searchChange}) => {
  return (
    <StyledSearch>
      <input type="search" placeholder="Robot Name" className="search-box"/>
    </StyledSearch>
  )
}

export default Search