import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
    searchlist: ''
}

const searchFriends = (state=initialState, action) => {
    switch(action.type){
      case CHANGE_SEARCH_FIELD:
        return {...state, searchlist: action.payload}
      default: 
        return state
    }
}

export default searchFriends;