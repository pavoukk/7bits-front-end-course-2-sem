function checkStatus(response) {
    if (response.status >= 200 || response.status < 300) {
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
        .then((response) => {
            return checkStatus(response);
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            throw error;
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
                throw error;
            }
        )
}

export function remove(url) {
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
            return checkStatus(response);
        })
        .catch((error) => {
            throw error;
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
            throw error
        })
}
