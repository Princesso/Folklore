import { FETCH_FRIENDS_SUCCESS } from '../constants'

const friendsReducer = (state=[],action) => {
  switch(action.type){
    case FETCH_FRIENDS_SUCCESS:
      return [...state, ...action.payload]
    default:
      return state
  }
}