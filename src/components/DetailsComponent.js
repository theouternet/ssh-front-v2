import React from "react";

class DetailsComponent extends React.Component{


    render(){
        let { software_name, subheader, image_link, editor_rating, price, full_review } = this.props.softwareObj
   
        return (

            <div>

            <h1> {software_name} </h1>
            <h3>Pros: {subheader}</h3>
            <img src={image_link} alt={software_name} width="225" height="125"/>
            <h3>Editor's Rating: {editor_rating}/5</h3>   
            <h3>Price: {price}</h3>  
            <h3>Full Review: {full_review}</h3>  


            </div>

        )
    }
}

export default DetailsComponent