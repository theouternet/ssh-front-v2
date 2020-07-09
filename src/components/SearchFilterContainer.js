import React from "react";
import { connect } from "react-redux"
//


class SearchFilterContainer extends React.Component {

    constructor(){
        super()

        this.state = {
            searchText: ""
        }
    }

    handleSearchSubmit = (x) => {
        x.preventDefault()
        if (this.state.searchText !== ""){
            let search = this.state.searchText
            fetch(`http://localhost:3001/software/search/${search}`)
            .then(resp => resp.json())
            .then(software => {
                this.props.searchResults(software.results)
            })
        }
        
     
    }