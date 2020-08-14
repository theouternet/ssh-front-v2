import React from "react";

class DetailsComponent extends React.Component{


    render(){
        let { software_name, subheader, image_link, editor_rating, price, full_review } = this.props.softwareObj
   
        return (

            <div>

            <img src={image_link} alt={software_name} width="225" height="125"/>
            <h4>Pros: {subheader}</h4>

            <h4>Editor's Rating: {editor_rating}/5</h4>   
            <h4>Price: {price}</h4>  
            <br></br>
            <br></br>
            <h6>Full Review: {full_review}</h6>  
            <br></br>


            </div>

        )
    }
}

export default DetailsComponent