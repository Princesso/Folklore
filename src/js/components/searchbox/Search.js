import React from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  margin:20px;
  padding: 2px;

  .search-box {
    background:#a682ff;
    border-radius: 9px;
    width: 20%;
    height: 35px;
    padding: 1%;
    font-size: 1em;
  }
`

const Search = ({searchChange}) => {
  return (
    <StyledSearch>
      <input 
      type="search" 
      placeholder="Friend's Name" 
      className="search-box"
      onChange = {searchChange}
      />
    </StyledSearch>
  )
}

export default Search