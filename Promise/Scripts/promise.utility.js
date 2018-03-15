(function () {
    'use strict';

    if (!Promise.observe) {
        Promise.observe = function (promise, callback) {
            // side-observe `promise`'s resolution
            promise.then(
                function fulfilled (message) {
                    // schedule callback async (as Job)
                    Promise.resolve(message).then(callback);
                },
                function rejected (error) {
                    // schedule callback async (as Job)
                    Promise.resolve(error).then(callback);
                }
            );
            // return original promise
            return promises;
        };
    }

    // use patterns like `first`, `last`, `any`
    if (!Promise.first) {
        Promise.first = function (promises) {
            return new Promise(function (resolve, reject) {
                // loop through all promises
                
                promises.forEach(function (promise) {
                    // normalize the value
                    Promise.resolve( promise )
                        // whichever one fulfills first wins,
                        // and gets to resolvethe main promise
                        .then( resolve );
                });
            });
        };
    }

    if (!Promise.map) {
        Promise.map = function (values, callback) {
            // new promise that waits for all mapped promises
            return Promise.all(
                // note: regular array `map(..)`, 
                // turns the array of values into an array of promises
                values.map(function (value) {
                    // replace `value` with a new promise 
                    // that resolves after `value` is async mapped
                    return new Promise(function (resolve) {
                        callback(value, resolve);
                    });
                })
            );
        };
    }

    if(!Promise.wrap) {
        Promise.wrap = function (fn) {
          return function () {
            var args = [].slice.call( arguments );
            return new Promise( function (resolve, reject) {
                fn.apply(
                    null,
                    args.concat( function (err, v) {
                        if (err) {
                            reject( err );
                        } else {
                            resolve( v );
                        }
                    } )
                );
            } );
          };
        };
    }
})();

