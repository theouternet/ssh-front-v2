// import __ from __

export const HOST_URL = "http://localhost:3001/"

// pull from own db w seeds on herokuapp?


export function fetchCategories(){
	const categories = fetch(`${baseUrl}categories`)
		.then(response => {return response.json()})
		.then(categories => {return categories})
	return({
		type: 'FETCH_CATEGORIES',
		payload: categories
	})
}

export function fetchSoftware(selectedCategories){
	const stringifiedIds = JSON.stringify (selectedCategories.map((category) => {return category.id}))
	const software = 	fetch(`${baseUrl}software?categoryIds=${stringifiedIds}`)
  		.then(response => {return response.json()})
			.then(software => {return software})
	return ({
		type: 'FETCH_SOFTWARE',
		payload: software
	})
}

