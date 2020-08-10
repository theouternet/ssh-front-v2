import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "../reducers/reducer"
import thunk from "redux-thunk"
import { Provider } from 'react-redux'
//
import {fetchCategories, fetchSoftwarez} from "../actions/actions"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

store.dispatch(fetchSoftwarez());


export default store;