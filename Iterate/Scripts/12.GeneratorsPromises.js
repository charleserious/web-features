function foo (x, y) {
	return ajax(
		'https://api.github.com?x=' + x + '&y=' + y
	);
}

foo(11, 31).then(
	function (text) {
		console.log(text);
	},
	function (err) {
		console.err(err);
	}
);
