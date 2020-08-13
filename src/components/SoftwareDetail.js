import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class SoftwareDetail extends Component {

  render() {
    const software = this.props.software
    return (
        <div className="box">

<Link to={`/software/${software.id}`}>
<h2>{software.software_name}</h2>
</Link>

          <h3>Pros: {software.subheader}</h3>
          <img src={software.image_link} alt={software.software_name} width="225" height="125"/>
          <h3>Editor's Rating: {software.editor_rating}/5</h3>   
          <h3>Price: {software.price}</h3>  

<br></br>
<br></br>


        </div>
    );
  }
};

export default SoftwareDetail