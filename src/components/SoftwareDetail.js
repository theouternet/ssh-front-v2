import React, { Component } from 'react'
import SoftwareDetailPgContainer from './SoftwareDetailPgContainer'

class SoftwareDetail extends Component {

  render() {
    const software = this.props.software
    return (
        <div className="box">
          <h2>{software.software_name}</h2>
          <h3>{software.description}</h3>   

          <SoftwareDetailPgContainer software={software}/>

        </div>
    );
  }
};

export default SoftwareDetail