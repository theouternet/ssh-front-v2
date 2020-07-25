import React from "react";

//


class DetailsContainer extends React.Component{
    

    render(){

        let { image } = this.props.softwareObj
   
        return (
            

            <div className="software-image-container">
                    <h1>Image</h1>
                    <p> {image}</p>
            </div>


        )
    }
}


  

export default DetailsContainer