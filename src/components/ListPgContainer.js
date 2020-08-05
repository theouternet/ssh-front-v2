import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import SearchFilterContainer from "./SearchFilterContainer"
import ResultsContainer from "./ResultsContainer"
import ResultBoxPreso from "./ResultBoxPreso";
// styles 
import { getSoftware } from '../actions/actions'


class ListPgContainer extends Component {

	render(){
		return(
			<div>

        <p>{this.props.software.length}</p>
        <p>{this.props.software.sofware_name}</p>

			</div>
		)
	  }
	}



	const mapStateToProps = (state) => {
		return { software: state.software };
	}

export default connect(mapStateToProps)(ListPgContainer);
