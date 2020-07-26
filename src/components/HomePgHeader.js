import React from "react";
import { Link } from "react-router-dom";

class HomePgHeader extends React.Component {

    render(){
        return(
            <div className="homepg-header">
                
                
                
                <button className="button-home">
                       <Link to="/software">Browse</Link> 
                </button>



            </div>
        )
    }

}

export default HomePgHeader