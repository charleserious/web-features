function * foo (x, y) {
	return x * y;
}

var it = foo(6, 7);
var res = it.next();
var value = res.value;	// 42
console.log(value);
