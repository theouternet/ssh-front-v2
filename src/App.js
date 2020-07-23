import React from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux"
import './App.css';
import { getSoftware } from './actions/actions';

import HomePg from "./components/HomePgContainer"
import TopNav from "./components/TopNav"
import ListPg from "./components/ListPgContainer"
import DetailPg from "./components/DetailPgContainer"
//


store.dispatch(getSoftware());



class App extends React.Component {



  componentDidMount(){

    this.props.fetchSoftware()

  }

  

  render(){
    return (
      <div className="App">
        < TopNav />
        <Switch>
          < Route exact path="/" render={() => <Redirect to="/home"/>}/>
          < Route exact path="/home" component={HomePg}/>
          < Route exact path="/software" component={ListPg}/>
          < Route exact path="/software/:id" render={(props) => {
            let softwareId = props.match.params.id 
              return < DetailPg softwareId={softwareId}/>
          }}/>

        </Switch>
      </div>
    )


  }

}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchSoftware: () => {dispatch(fetchSoftware())},

  }
}

//

export default withRouter(connect(mapDispatchToProps)(App))