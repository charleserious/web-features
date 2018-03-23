function * foo (x) {
	var y = x * (yield);
	return y;
}

var it = foo(6);

// strat `foo()`
it.next();

var res = it.next(7);
var value = res.value;	// 42
console.log(value);
