import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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

	const mapStateToProps = (state, ownProps) => ({ software: state.software });
	const mapDispatchToProps = { getSoftware };
	const AppContainer = connect(mapStateToProps, mapDispatchToProps)(ListPgContainer);

	export default AppContainer;
