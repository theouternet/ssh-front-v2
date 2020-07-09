import { combineReducers } from "redux";

const primaryReducer = (state = [], action) => {
    switch(action.type) {
     


        case "SEARCH_RESULTS":
            return action.payload



        default: 
            return state;
    }
}


const searchReducer = (state = "", action) => {
    switch(action.type){
        case "MODIFY_SEARCH":
            return action.payload
        default: 
            return state;
    }
}


const rootReducer = combineReducers({
    softwareState: primaryReducer,
    searchText: searchReducer
});

export default rootReducer;