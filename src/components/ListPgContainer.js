import React from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router'
import SearchFilterContainer from "./SearchFilterContainer"
import ResultsContainer from "./ResultsContainer"
// styles 

function ListPgContainer (props) {

	return(
		<div>
			<div id="software-list">
				<h3>Browse Software</h3>
				<ul>
				{props.software.map((s) => {
					return(
					<li key={'software' + s.id}>
						<Link to={`/software/${s.id}`}>
							{s.name}
						</Link>
					</li>
				)
			})}
				</ul>
			</div>
			{props.children}
		</div>
	)
}

function mapStateToProps(state){
	return{
		software: state.software
	}
}


export default connect(mapStateToProps)(ListPgContainer)
