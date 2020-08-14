import React from "react"
import { Link } from "react-router-dom"
//


class TopNav extends React.Component {
    
    render(){
      return (
            <div className="nav-top">
               
                < Link className="nav-item" to="/home">
                Home   
                </Link>
                <sp>   </sp>
                < Link className="nav-item" to="/software">
                  Software
                 </Link>
                
                 <br />
                 <br />


            </div>


// add session links here later?


    )
 }
}

export default TopNav
