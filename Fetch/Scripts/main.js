(function() {
    'use strict';

    var status = function (response) {
        console.log('Request in status ', response);
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    };

    var json = function (response) {
        return response.json();
    };

    var options = {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json'
        },
        mode: 'cors',
        cache: 'default'
    };

    fetch('https://api.github.com', options)
        .then(status)
        .then(json)
        .then(function (data) {
            console.log('Request succeeded with JSON response ', data);
        })
        .catch(function (error) {
            console.log('Request failed ', error);
        });
})();