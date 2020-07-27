import React from 'react'
import * as actions from '../actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
//
import {connect} from 'react-redux'
import {Link} from 'react-router'
//
import ListPg from './ListPgContainer'
import DetailPgContainer from './DetailPgContainer'

class SearchFilterContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedCategories: [],
			term: ""
		}
		this.checkboxHandler = this.checkboxHandler.bind(this)
	}

//good

