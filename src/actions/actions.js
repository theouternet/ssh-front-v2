export const HOST_URL = "https://cors-anywhere.herokuapp.com/https://ssh-api-htest3.herokuapp.com/api/v1/"

export const getSoftware = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_SOFTWARE'})

	  fetch(`${HOST_URL}softwares`)
	  .then(response => {
		return response.json()
	  }).then(responseJSON => {
		dispatch({ type: 'ADD_SOFTWARE', software: responseJSON })
	  })
	}
  }