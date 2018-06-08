// function * foo (url) {
// 	// STATE *1*
// 	try {
// 		console.log('requesting: ', url);
// 		var TMP1 = fetch(url);
// 		// STATE *2*
// 		var val = yield TMP1;
// 		console.log(val);
// 	} catch (error) {
// 		// STATE *3*
// 		console.log('Oops: ', error);
// 		return false;
// 	}
// }

// var it = foo('https://api.github.com/');

// it.next();

function foo (url) {
	// manager generator state
	var state;

	// generator-wide variable declarations
	var val;

	function process (v) {
		switch (state) {
		case 1:
			console.log('requesting: '.url);
			return fetch(url);
		case 2:
			val = v;
			console.log(val);
			return;
		case 3:
			var err = v;
			console.log('Oops: ', err);
			return false;
		}
	}
	// make and return an iterator
	return {
		next: function (v) {
			// initial state
			if (!state) {
				state = 1;
				return {
					done: false,
					value: process()
				};
			} else if (state === 1) { // yield resumed successfully
				state = 2;
				return {
					done: true,
					value: process(v)
				};
			} else { // generator already completed
				return {
					done: true,
					value: undefined
				};
			}
		},
		'throw': function (e) {
			// the only explicit error handling is in state *1*
			if (state === 1) {
				state = 3;
				return {
					done: true,
					value: process(e)
				};
			} else { // otherwise, an error won't be handled so just throw it right back out
				throw e;
			}
		}
	};
}
