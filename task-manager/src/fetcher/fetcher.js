localStorage.setItem('jwt', 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJ0YXRpYW5hbWV6emFuaW5lQGdtYWlsLmNvbSIsImlhdCI6MTU1NjU0NjgzNywic3ViIjoiYWRtaW4iLCJleHAiOjE1NTY1NDg2MzcsImF1dGhvcml0aWVzIjpbIkFETUlOIiwiVVNFUiJdfQ.b5T-GSkcKkcTOkzlXFDlan6JwIm9RnpLsBh7XqLIMFOQHYgp0xt2MbunHvPqvcVagwvrd1fCesKTZOjeJpikzg');

function checkStatus(response) {
    if(response.status >= 200 || response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}

export function get(url) {
    const token = localStorage.getItem('jwt');
    return fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    })
        .then((response)=> {
            return checkStatus(response);
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            return error;
        });
}
export function add(url, text) {
    const token = localStorage.getItem('jwt');
    return fetch(url, {
      method: 'POST',
      headers: new Headers({
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
      }),
      body: JSON.stringify(text)
  })
      .then((response) => {
          return checkStatus(response)
      })
      .catch((error) => {
          return error;
          }
      )
}

export  function remove(url) {
    const token = localStorage.getItem('jwt');
    return fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    })
        .then((response) => {
            console.log("CHECKEDD");
            return checkStatus(response);
        })
        .catch((error) => {
            console.log("ERROR");
            return error;
        })
}

export function patch(url, data) {
    const token = localStorage.getItem('jwt');
    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }),
        body: JSON.stringify(data)
    })
        .then((response) => {
            return checkStatus(response)
        })
        .catch((error) => {
            return error
        })
}
