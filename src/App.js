import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux"
import './App.css';
import { getSoftware } from './actions/actions';

import HomePg from "./components/HomePgContainer"
import TopNav from "./components/TopNav"
import ListPgContainer from "./components/ListPgContainer"
import DetailPg from "./components/DetailPgContainer"
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
          < Route exact path="/software/:id" render={(props) => {
            let softwareId = props.match.params.id 
              return < DetailPg softwareId={softwareId}/>
          }}/>

        </Switch>
      </div>
    )


  }

}

//

//
export default (App);