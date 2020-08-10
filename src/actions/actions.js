export const HOST_URL = "https://cors-anywhere.herokuapp.com/https://ssh-api-htest3.herokuapp.com/api/v1"

export function fetchSoftwarez() {
	return (dispatch) => {
	  fetch(HOST_URL + '/softwares')
		.then(response => response.json())
		.then(responseJSON => {
			dispatch({type: 'SET_SOFTWARE', softwarez: responseJSON});
		})
	}
  }