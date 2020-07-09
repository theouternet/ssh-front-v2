import { combineReducers } from "redux";

const primaryReducer = (state = [], action) => {
    switch(action.type) {
     


        case "SEARCH_RESULTS":
            return action.payload



        default: 
            return state;
    }
}

const rootReducer = combineReducers({
    _____: primaryReducer,
    searchText: searchReducer
});

export default rootReducer;