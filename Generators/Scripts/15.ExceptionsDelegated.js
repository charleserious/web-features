function * foo () {
	try {
		yield 'B';
	} catch (error) {
		console.log('error caught inside `* foo()`: ', error);
	}

	yield 'C';

	throw 'D';
}

function * baz () {
	yield 'F';
}

function * bar () {
	yield 'A';

	try {
		yield * foo();
	} catch (error) {
		console.log('error caught inside `* bar()`: ', error);
	}

	yield 'E';

	yield * baz();

	// note: can't get here
	yield 'G';
}

var it = bar();

console.log('outside', it.next().value);	// outside: A
console.log('outside', it.next(1).value);	// outside: B
console.log('outside', it.throw(2).value);	// error caught inside `* foo()`: 2 // outside: C
console.log('outside', it.next(3).value);	// error caught inside `* bar()`: D // outside: E

try {
	console.log('outside', it.next(4).value);
} catch (error) {
	console.log('error caught outside: ', error);
}
// error caught outside: F
