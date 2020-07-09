// import __ from __

let HOST_URL = "http://localhost:3001"


function searchResults(games){
    return {type: "SEARCH_RESULTS", payload: software}
}

function modifySearch(text){
    return {type: "MODIFY_SEARCH", payload: text}
}


export { searchResults, modifySearch }