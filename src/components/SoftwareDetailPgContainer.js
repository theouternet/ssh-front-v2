import React, { Component } from 'react';
import { trackPromise} from 'react-promise-tracker';
import { connect } from 'react-redux'

import Footer from "./Footer"
import DetailsComponent from "./DetailsComponent"
//

class SoftwareDetailPgContainer extends Component { 

    constructor(){
        super()
        this.state = {
            showSoftware: {}
        }
    }

    componentDidMount(){
        let softwareId = this.props.softwareId
        trackPromise(
            fetch(`https://cors-anywhere.herokuapp.com/https://ssh-api-v6.herokuapp.com/api/v1/softwares/${softwareId}`)
            .then(resp => resp.json())
            .then(software => {
                this.setState({
                    showSoftware: software
                })
            })
        )
    }
        


render () {
    return (
        
        <div>
         
           < DetailsComponent softwareObj={this.state.showSoftware} showSoftware={this.state.showSoftware}/>
                   
        </div>
         
    )
}
}


const mapStateToProps = ({ softwarez }) => softwarez


export default connect(mapStateToProps, null)(SoftwareDetailPgContainer) 
