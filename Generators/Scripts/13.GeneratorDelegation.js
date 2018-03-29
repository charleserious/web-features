function * foo () {
	console.log('`* foo ()` starting');
	yield 3;
	yield 4;
	console.log('`* foo ()` finished');
}

function * bar () {
	yield 1;
	yield 2;
	yield * foo();	// `yield` delegation!
	yield 5;
}

var it = bar();
var value;

value = it.next().value;	// 1
console.log(value);
value = it.next().value;	// 2
console.log(value);
value = it.next().value;	// `*foo ()` starting // 3
console.log(value);
value = it.next().value;	// 4
console.log(value);
value = it.next().value;	// `*foo ()` finished // 5
console.log(value);
