import { combineReducers } from "redux";


const softwareReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SOFTWARE':
      return action.payload
    default:
      return state;
  }
};


const categoriesReducer = (state=[], action) => {
	switch(action.type){
		case 'FETCH_CATEGORIES':
			return action.payload
		default:
			return state
	}
}

const rootReducer = combineReducers({
   categories: categoriesReducer,
   software: softwareReducer
});

export default rootReducer;