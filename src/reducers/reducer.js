import { combineReducers } from "redux";


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
    showSoftware: showReducer,
    userLikedSoftware: likedSoftwareReducer
});

export default rootReducer;