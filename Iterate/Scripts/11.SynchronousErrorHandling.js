// function *main () {
//     var x = yield "Hello World";

//     yield x.toLowerCase();  // cause an exception!
// }

// var it = main();
// var value;
// value = it.next().value;
// console.log("Message", value);

// try {
//     it.next( 42 );
// } catch (error) {
//     console.error( error );
// }

function * main () {
	var x = yield 'Hello World';

	// never gets here
	console.log(x);
}

var it = main();

it.next();

try {
	// will `*main()` handle this error? we'll see!
	it.throw('Oops');
} catch (error) {
	// nope, didn't handle it!
	console.error(error);
}
