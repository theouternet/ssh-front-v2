import React, { Component } from 'react'
import SoftwareDetailPgContainer from './SoftwareDetailPgContainer'
import {Link} from 'react-router-dom'


class SoftwareDetail extends Component {

  render() {
    const software = this.props.software
    return (
        <div className="box">

          <h2>{software.software_name}</h2>
          <h3>{software.description}</h3>   

					<li key={'software' + software.id}>
						<Link to={`/software/${software.id}`}>
							{software.name}
              software={software}
						</Link>
					</li>

        </div>
    );
  }
};

export default SoftwareDetail