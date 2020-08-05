export const HOST_URL = "https://ssh-api-htest3.herokuapp.com/api/v1/"

export function getSoftware() {
	return dispatch =>
	  fetch(`${HOST_URL}softwares`)
		.then(res => res.json())
		.then(res => res.results)
		.then(software => {
		  dispatch(setSoftware(software))
		});
  }

  export function setSoftware(software) {
	return {type: 'SET_SOFTWARE', payload: software};
  }