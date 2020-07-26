// import __ from __

export const HOST_URL = "http://localhost:3001"

// 


function fetchSoftware(){
  //add filter by criteria functionality here + argument
  fetch(`${HOST_URL}/software`)
  		.then(response => {return response.json()})
			.then(software => {return software})
	return ({
		type: 'FETCH_SOFTWARE',
		payload: software
	})
}

//REMOVE_SOFTWARE goes here



//
function getSoftware(){
    return (dispatch) => {
        fetch(`${HOST_URL}/software`)
        .then(res => res.json())
           .then(result => {
             dispatch(setSoftware(result))
           })
           }
        }


function setSoftware(software) {
    return {type: "SHOW_SOFTWARE", payload: software.results}
}
//


function fetchedLikedSoftware(software){
  return {type: "GET_LIKED_SOFTWARE", payload: software}
}






export { fetchSoftware, getSoftware, fetchedLikedSoftware }