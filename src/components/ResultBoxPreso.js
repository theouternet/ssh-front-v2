import React from "react"
import { Link } from "react-router-dom"


class ResultBoxPreso extends React.Component {

    render(){
        let { name } = this.props.softwareObj




        return (
            <div className="box">
<h1>Name</h1>
<p> {name} </p>
            </div>

//
        )
    }
}

export default ResultBoxPreso