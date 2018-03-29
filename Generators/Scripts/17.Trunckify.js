function trunckify (fn) {
	var args = [].slice.call(arguments, 1);
	return function (cb) {
		args.push(cb);
		return fn.apply(null, args);
	};
}

function foo (x, y) {
	return x + y;
}

var fooTrunck = trunckify(foo, 3, 4);

fooTrunck(function (sum) {
	console.log(sum);
});
