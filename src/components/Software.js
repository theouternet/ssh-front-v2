import React, { Component } from 'react';
import SoftwareDetail from './SoftwareDetail';
import { connect } from 'react-redux';
import { fetchSoftwarez } from '../actions/actions';

class Software extends Component {

    componentDidMount() {
        this.props.fetchSoftwarez()
    }


  render() {
    
    const softwarez = this.props.fetchedSoftwarez.map(software => {
      return (

        <SoftwareDetail
            key={software.id}
            software={software}
        />
      )
    });

    return(
      <div>

        <h2>Software List:</h2>
        <h5>Make a Selection to Learn More</h5>
        
        <br></br>

        {softwarez}

        <br></br>

      </div>
    );
  }
};

const mapStateToProps = ({ softwarez }) => softwarez

function mapDispatchToProps(dispatch){
  return {
      fetchSoftwarez: () => dispatch(fetchSoftwarez())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Software)
