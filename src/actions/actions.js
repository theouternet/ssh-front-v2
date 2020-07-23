// import __ from __

export const HOST_URL = "http://localhost:3001"


function searchResults(software){
    return {type: "SEARCH_RESULTS", payload: software}
}

function modifySearch(text){
    return {type: "MODIFY_SEARCH", payload: text}
}



// 

export const SET_SOFTWARE = 'SET_SOFTWARE';


export function getSoftware(){
    return dispatch => {
        fetch('${HOST_URL}/software/:id')
           .then(res => res.json())
           .then(res => res.results)
           .then(software => 
             dispatch(setSoftware(software))
             )
           }


export function setSoftware(software) {
    return {
        type: SET_CHARACTERS,
        characters,
      };
    }

//




export { searchResults, modifySearch, getSoftware, setSoftware }