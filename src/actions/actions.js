// import __ from __

export const HOST_URL = "http://localhost:3001"

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






export { getSoftware, fetchedLikedSoftware }