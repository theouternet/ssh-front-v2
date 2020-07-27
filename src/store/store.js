import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/reducer";
import thunk from "redux-thunk"

//

import {fetchCategories} from "../actions/action";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


store.dispatch(fetchCategories())



export default store;