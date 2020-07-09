import React from "react";
import SearchFilterContainer from "../SearchFilterContainer"
import ResultBoxPreso from "../ResultBoxPreso"
import { connect } from "react-redux"

class ResultsContainer extends React.Component {

    render(){
        return (
            <div className="results-container"> 
                <div className="results-filter">
                    < SearchFilterContainer /> 
                </div>

                <div className="results-section">
                    {this.props.software.map(software => {
                        return < ResultBoxPreso key={software.id} softwareObj={software}/>
                    })} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        software: state.softwareState
    }
}


export default connect(mapStateToProps)(ResultsContainer)
