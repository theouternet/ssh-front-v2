import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux"
import './App.css';
import { fetchSoftwarez } from './actions/actions';

import HomePg from "./components/HomePgContainer"
import TopNav from "./components/TopNav"
import ListPgContainer from "./components/ListPgContainer"
import SoftwareDetailPgContainer from "./components/SoftwareDetailPgContainer"
//

class App extends Component {


  componentDidMount() {
    this.props.fetchSoftwarez()
}


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
             return  < SoftwareDetailPgContainer softwareId={softwareId}/> 
          }}/>



        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ softwarez }) => softwarez

function mapDispatchToProps(dispatch){
  return {
      fetchSoftwarez: () => dispatch(fetchSoftwarez())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
