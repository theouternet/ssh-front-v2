import { combineReducers } from "redux";

//
export default function SoftwareReducer (state=[], action) {

    switch(action.type){
      case 'FETCH_SOFTWARE':
        return action.payload
      case 'REMOVE_SOFTWARE':
          return action.payload
      default:
        return state
    }
  }  

  
//

const showReducer = (state = {}, action) => {
    switch(action.type){
        case "SHOW_SOFTWARE":
            return action.payload
        default: 
            return state;
    }
}

const likedSoftwareReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_LIKED_SOFTWARE":
            return action.payload
        default: 
            return state;
    }
}

const rootReducer = combineReducers({
   
   software: SoftwareReducer,
   
    showSoftware: showReducer,
    userLikedSoftware: likedSoftwareReducer
});

export default rootReducer;