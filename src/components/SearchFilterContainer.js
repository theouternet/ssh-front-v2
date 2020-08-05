import React from 'react'
import * as actions from '../actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import {browserHistory} from 'react-router'
//
import {Link} from 'react-router-dom'
//
import ListPg from './ListPgContainer'
import DetailPgContainer from './DetailPgContainer'

class SearchFilterContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedCategories: [],
			query: ""
		}
		this.checkboxHandler = this.checkboxHandler.bind(this)
	}


checkboxHandler (event){
    if (event.target.checked){
        let selectedCategories = this.state.selectedCategories
        const newCategory = this.props.categories.find((category) => {
            return (category.id === parseInt(event.target.id))
        })

        this.setState({
            selectedCategories: [...selectedCategories, newCategory]
        })
        this.props.actions.fetchSoftware([...selectedCategories, newCategory])

        //browserHistory.push('/software')

    } else {
        let selectedCategories = this.state.selectedCategories

        const removedCategoryId = parseInt(event.target.id)
        const removedCategory = this.state.selectedCategories.find((category) => {return category.id === removedCategoryId})

        const removedCategoryIndex = selectedCategories.indexOf(removedCategory)
        selectedCategories.splice(removedCategoryIndex, 1)

        this.setState({
            selectedCategories: selectedCategories
        })

        this.props.actions.removeSoftware(selectedCategories)

    }
}

//good


handleSearchChange(event) {
    this.setState({query: event.target.value})
}

render(){
    return(
        <div id="search">
            <div id="category-search">
                <h3>Search by Category</h3>
                <input value={this.state.query} placeholder="Search Categories" onChange={this.handleSearchChange.bind(this)} />
                <form>
                {this.props.categories.filter((category) =>{
                    return (this.state.query === "") || (category.name.includes(this.state.query.toLowerCase()))}).map((category) => {
                        return(
                            <div key={category.id}>
                                <input type="checkbox" id={category.id} onChange={this.checkboxHandler} ref={category.id} checked={this.state.selectedCategories.includes(category)}/>
                                <label htmlFor={category.id}> {category.name}</label>
                            </div>
                        )
                    })}

                </form>
            </div>
            <div id="search-children">
                {this.props.children}
            </div>
        </div>
    )
}
}

function mapStateToProps(state){
    console.log(state)
    return{
        categories: state.categories
    }
    }
    
    function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterContainer)