import tokenService from './tokenService';

const BASE_URL = '/api/facts/';

function addFact(newFact) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
      body: JSON.stringify(newFact)
    }).then( res => res.json())
}

function deleteOne(id) {
    return fetch(BASE_URL + id, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

function update(newFact) {
    return fetch(BASE_URL + newFact._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(newFact)
    }).then(res => res.json());
}

export default {
    addFact,
    deleteOne,
    update
}