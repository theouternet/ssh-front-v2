import React from "react"
import { Link } from "react-router-dom"


class ResultBoxPreso extends React.Component {

    render(){
        let {name, image} = this.props.softwareObj

        const boxStyle = {
            background: `url(${image})`,

        }


        return (
            <div className="box">
                <Link to={`/software/${this.props.softwareObj.id}`}>
               
                </Link>

                <Link className="search-software-txt" to={`/software/${this.props.softwareObj.id}`}>{name}</Link>
            </div>
        )
    }
}

export default ResultBoxPreso