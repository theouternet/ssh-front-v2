import { combineReducers } from "redux";



import { SET_SOFTWARE } from './actions';



const initialState = [];




export default (state = initialState, action) => {
    switch (action.type) {
      case SET_SOFTWARE:
        return action.software;
      default:
        return state;
    }
  };




const searchReducer = (state = "", action) => {
    switch(action.type){
        case "MODIFY_SEARCH":
            return action.payload
        default: 
            return state;
    }
}


const rootReducer = combineReducers({
    getSoftware: primaryReducer,
    searchText: searchReducer
});

export default rootReducer;