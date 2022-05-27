import tokenService from "./tokenService";

const BASE_URL = '/api/favorite'

export function create(countryName){
   

    console.log(countryName)
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify(countryName),
        headers: {
			'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
    })
}

export function deleteFavorite(favoriteId) {
    return fetch(`${BASE_URL}/${favoriteId}`, {
        method: 'DELETE',
        headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
    })
}

