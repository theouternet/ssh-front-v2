import React from "react";
import {Link} from 'react-router-dom'


class HomePg extends React.Component {

render(){
    return(
        <div className="home-pg-container">
                <div className="title-container">

            <br />
            <h3>-Software Shopper-</h3>
            <br />
            <h4>Accounting Edition</h4>

            <button>
                       <Link to="/software">Browse</Link> 
            </button>

            <br />

        </div>
        </div>
    )
}

}

export default HomePg;