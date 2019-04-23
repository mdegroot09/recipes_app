import {createStore} from 'redux'

let initialState = {
  name: '',
  category: ''
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {...state, name: action.payload}
    case UPDATE_CATEGORY:
      return {...state, category: action.payload}
    default: 
      return state
  }
}

export default createStore(reducer)