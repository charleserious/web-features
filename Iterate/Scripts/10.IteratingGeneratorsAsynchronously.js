/**
 * global ajax
 */

// function foo(x, y, cb) {
//     ajax(
//         'https://api.github.com?x=' + x + '&y=' + y,
//         cb
//     );
// }

// foo( 11, 31, function(err, text) {
//     if(err) {
//         console.error( err );
//     } else {
//         console.log( text );
//     }
// });

function foo (x, y) {
	ajax(
		'https://api.github.com?x=' + x + '&y=' + y,
		function (err, text) {
			if (err) {
				// throw an error into `*main()`
				it.throw(err);
			} else {
				// resume `*main()` with received `text`
				it.next(text);
			}
		}
	);
}

function * main () {
	try {
		var text = yield foo(11, 31);
		console.log(text);
	} catch (error) {
		console.error(error);
	}
}

var it = main();

// start it all up!
it.next();
