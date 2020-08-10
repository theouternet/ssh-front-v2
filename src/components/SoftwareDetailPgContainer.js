import React, { Component } from 'react';
//
import { connect } from 'react-redux'
//

class SoftwareDetailPgContainer extends Component { 

render () {
    return (
        <div>



        </div>
    )
}


}


const mapStateToProps = ({ reviews }) => {
    return {
        reviews: reviews.reviews    }
}

// dispatch?


export default connect(mapStateToProps)(SoftwareDetailPgContainer)
