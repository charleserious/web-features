var res = [];

function * reqData (url) {
	var data = yield fetch(url);
	//  transfer control
	yield;
	res.push(data);
}

var it1 = reqData('https://api.github.com/?1');
var it2 = reqData('https://api.github.com/?2');

var p1 = it1.next();
var p2 = it2.next();

p1.then(function (data) {
	it1.next(data);
});

p2.then(function (data) {
	it2.next(data);
});

Promise.all([p1, p2])
	.then(function () {
		it1.next();
		it2.next();
	});
