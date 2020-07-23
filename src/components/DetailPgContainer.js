import React from "react"

import { trackPromise} from 'react-promise-tracker';

import { connect } from 'react-redux'

import DetailsContainer from "./DetailsContainer"

// styles 


class DetailPg extends React.Component {


    constructor(){
        super()

        this.state = {
            showSoftware: {},
            softwareImages: []
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

            )

    }


    render() {

        
        return (
          
            //
          
          <div>
            
            < DetailsContainer softwareObj={this.state.showSoftware} showSoftware={this.state.showSoftware}/>

          </div>
        );
      }
    }

   

const mapStateToProps = state => {
    return {
        software: state.showSoftware
    }
}

export default connect(mapStateToProps, null)(DetailPg)