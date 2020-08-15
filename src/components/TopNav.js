import React from "react"
import { Link } from "react-router-dom"
//


class TopNav extends React.Component {
    
    render(){
      return (
            <div className="topnav">

              <div className="navlft">
                < Link className="nav-item" to="/home">
                Home   
                </Link>
            
                < Link className="nav-item" to="/software">
                Software
                 </Link>
                 </div>

            </div>


// add session links here later?


    )
 }
}

export default TopNav
