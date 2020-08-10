import React from 'react';
import {connect} from 'react-redux'
import Software from '../Software'
import {Link} from 'react-router-dom'

// styles 
import { getSoftware } from '../actions/actions'


const ListPgContainer = () => <div><Software /></div>

export default ListPgContainer;
