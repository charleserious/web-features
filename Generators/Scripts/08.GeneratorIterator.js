function * something () {
	var nextVal;
	while (true) {
		if (nextVal === undefined) {
			nextVal = 1;
		} else {
			nextVal = (3 * nextVal) + 6;
		}
		yield nextVal;
	}
}

for (var v of something()) {
	console.log(v);
	if (v > 500) {
		break;
	}
}

// 1 9 33 105 321 969
