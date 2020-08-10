import { combineReducers } from "redux";


let softwareReducerInitialState = {fetchedSoftwarez: []}

const softwareReducer = (state = softwareReducerInitialState, action) => {
  switch(action.type) {
    case 'SET_SOFTWARE':
        return {...state,
          fetchedSoftwarez: action.softwarez
        };
        default:
          return state;

  }
}


const rootReducer = combineReducers({
   softwarez: softwareReducer
});

export default rootReducer;