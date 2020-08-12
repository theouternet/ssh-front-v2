import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class SoftwareDetail extends Component {

  render() {
    const software = this.props.software
    return (
        <div className="box">

        <Link to={'/software/${this.props.software.id}'}>

          <h1>{software.software_name}</h1>
          <h3>Pros: {software.subheader}</h3>
          <img src={software.image_link} alt={software.software_name} width="225" height="125"/>
          <h3>Editor's Rating: {software.editor_rating}/5</h3>   
          <h3>Price: {software.price}</h3>  

<br></br>
<br></br>

        </Link>

        </div>
    );
  }
};

export default SoftwareDetail