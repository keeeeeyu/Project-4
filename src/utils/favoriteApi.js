import tokenService from "./tokenService";

const BASE_URL = '/api/favorites'

export function create(){
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
    })
}

export function removeFavorite(favoriteId) {
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

