import { combineReducers } from "redux";


let softwareReducerInitialState = {fetchedSoftware: []}

const softwareReducer = (state = softwareReducerInitialState, action) => {
  switch(action.type) {
    case 'SET_SOFTWARE':
        return {...state,
          fetchedSoftware: action.software
        };
        default:
          return state;

  }
}


const rootReducer = combineReducers({
   software: softwareReducer
});

export default rootReducer;