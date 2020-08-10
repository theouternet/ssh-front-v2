import React, { Component } from 'react';

class SoftwareDetail extends Component {

  render() {
    const software = this.props.software
    return (
        <div className="box">
          <h2>{software.software_name} (${software.description})</h2>
          <h4 className="software-detail">{software.id}</h4>
         
        </div>
    );
  }
};

export default SoftwareDetail