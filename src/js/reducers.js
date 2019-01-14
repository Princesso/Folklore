import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
    searchlist: ''
}

//Ensure that the name of the Reducer that is reducing the action represents the name of the action
export const searchFriends = (state=initialState, action = {}) => {
    switch(action.type){
      case (CHANGE_SEARCH_FIELD):
        return Object.assign({}, state, {searchFriends: action.payload})
      default: 
        return state
    }
}