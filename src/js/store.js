import {createStore} from 'redux'
import searchFriends from './reducers'

const store = createStore(searchFriends)

export default store;