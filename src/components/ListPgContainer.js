import React from "react";
import SearchFilterContainer from "./SearchFilterContainer"
import ResultsContainer from "./ResultsContainer"
// styles 

class ListPgContainer extends React.Component {

    render (){
        return(
            <div className="list-page">
                < SearchFilterContainer />
                < ResultsContainer />
            </div>
        )
    }

}

export default ListPgContainer