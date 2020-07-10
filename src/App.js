import React from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";

import './App.css';

import HomePg from "./components/HomePgContainer"
import TopNav from "./components/TopNav"
import ListPg from "./components/ListPgContainer"
import DetailPg from "./components/DetailPgContainer"


class App extends React.Component {


  render(){
    return (
      <div className="App">
        < TopNav />
        <Switch>
          < Route exact path="/" render={() => <Redirect to="/home"/>}/>
          < Route exact path="/home" component={HomePg}/>
          < Route exact path="/list" component={ListPg}/>
          < Route exact path="/list/:id" render={(props) => {
            let softwareID = props.match.params.id 
              return < DetailPg softwareId={softwareID}/>
          }}/>

        </Switch>
      </div>
    )


  }

}

export default withRouter(App);