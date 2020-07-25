import React from "react"
import { trackPromise} from 'react-promise-tracker';
//
import { connect } from 'react-redux'
//
import DetailsContainer from "./DetailsContainer"
// styles 


class DetailPg extends React.Component {
    constructor(){
        super()

        this.state = {
            showSoftware: {}
        }
    }
 

    componentDidMount(){
        let softwareId = this.props.softwareId
        trackPromise(
            fetch(`http://localhost:3001/software/${softwareId}`)
            .then(resp => resp.json())
            .then(software => {
                this.setState({
                    showSoftware: software
                })
            })
        );

    }


    render(){

        
        return (
          
            //spinner/loading animation here?
          
          <div>
            
            < DetailsContainer softwareObj={this.state.showSoftware} showSoftware={this.state.showSoftware}/>

          </div>
        );
      }
    }

   

const mapStateToProps = state => {
    return {
        userLikedSoftware: state.userLikedSoftware
    }
}

export default connect(mapStateToProps, null)(DetailPg)