import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk"

import HomePgContainer from "./components/HomePgContainer"
import TopNav from "./components/TopNav"
import ListPgContainer from "./components/ListPgContainer"
import DetailPgContainer from "./components/DetailPgContainer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
