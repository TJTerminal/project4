const BASE_URL = '/api/facts/';

function addFact(newFact) {
    return fetch(BASE_URL,  {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(newFact)
    }).then( res => {
        if (res.ok) {
            return res.json()
        }
    } ).then( data => {
        console.log(data, 'this is our new data')
    })
}

export default {
    addFact
}