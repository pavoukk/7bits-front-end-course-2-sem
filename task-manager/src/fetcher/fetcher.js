function checkStatus(response) {
    if(response.status >= 200 || response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}

export function get(url) {
    return fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
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
  return fetch(url, {
      method: 'POST',
      headers: new Headers({
          'Accept': 'application/json',
          'Content-type': 'application/json'
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
    return fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json'
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
    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json'
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
