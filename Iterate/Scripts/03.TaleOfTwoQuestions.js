function * foo (x) {
	var y = x * (yield 'Hello');	// yield a value!
	return y;
}

var it = foo(6);

var res = it.next();	// first `next()`, don't pass anything
var value = res.value;	// "Hello"
console.log(value);

res = it.next(7);	// pass `7` to waiting `yield`
value = res.value;
console.log(value);	// 42
