import tokenService from './tokenService';

const BASE_URL = '/api/facts/';

// function addFact(newFact) {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify(newFact)
//   })
//   .then(res => {
//     if (res.ok) return res.json();
//     // Probably a duplicate email
//     throw new Error('something went wrong!');
//   })
//   .then((data) => {
//     console.log(data)
    
//   });
// }

// function addFact(newFact) {
//     return fetch(BASE_URL, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json', 
//           'Authorization': 'Bearer ' + tokenService.getToken()
//         },
//       body: JSON.stringify(newFact)
//     }).then( res => res.json())
// }

function addFact(newFact) {
  console.log(newFact)
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
      body: JSON.stringify(newFact)
    };
    return fetch (BASE_URL, options)
    .then(res => {
      console.log(res)
      if(res.ok) {
        return res.json()
      }
      
    });
}

// function deleteOne(id) {
//     return fetch(BASE_URL + id, {
//         method: 'DELETE',
//         headers: {
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         }
//     }).then(res => res.json());
// }

// function update(newFact) {   
//     return fetch(BASE_URL + newFact._id, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json', 
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         },
//         body: JSON.stringify(newFact)
//     }).then(res => res.json());
// }

export default {
    addFact,
    // deleteOne,
    // update
}