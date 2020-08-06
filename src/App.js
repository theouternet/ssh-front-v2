import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux"
import './App.css';
import { getSoftware } from './actions/actions';

import HomePg from "./components/HomePgContainer"
import TopNav from "./components/TopNav"
import ListPgContainer from "./components/ListPgContainer"
//



class App extends Component {

//

  

  render(){
    return (
      <div className="App">
        < TopNav />
        <Switch>
          < Route exact path="/" render={() => <Redirect to="/home"/>}/>
          < Route exact path="/home" component={HomePg}/>
          < Route exact path="/software" component={ListPgContainer}/>

          }}/>

        </Switch>
      </div>
    )


  }

}

//

//
export default (App);