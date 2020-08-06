import { combineReducers } from "redux";


const softwareReducer = (state = { software: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_SOFTWARE':
      return {
        ...state,
        software: [...state.software],
        loading: true
      }
    case 'ADD_SOFTWARE':
      return {
        ...state,
        software: action.software,
        loading: false
      }
    default:
      return state;
  }
}


const rootReducer = combineReducers({
   software: softwareReducer
});

export default rootReducer;