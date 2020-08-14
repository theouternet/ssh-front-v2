import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class SoftwareDetail extends Component {

  render() {
    const software = this.props.software
    return (
        <div className="box">

          <Link to={`/software/${software.id}`}>
            <img src={software.image_link} alt={software.software_name} width="225" height="125"/>
          </Link>
          <h5>Pros: {software.subheader}</h5>
          <h5>Editor's Rating: {software.editor_rating}/5</h5>   
          <h5>Price: {software.price}</h5>  

<br></br>
<br></br>


        </div>
    );
  }
};

export default SoftwareDetail