import { combineReducers } from "redux";



export default function CategoriesReducer(state=[], action){
	switch(action.type){
		case 'FETCH_CATEGORIES':
			return action.payload
		default:
			return state
	}
}


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

  
const rootReducer = combineReducers({
   categories: CategoriesReducer,
   software: SoftwareReducer
});

export default rootReducer;