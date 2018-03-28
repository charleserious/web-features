// closure style
// var gimmeSomething = (function () {
//     var nextVal;
//     return function () {
//         if (nextVal === undefined) {
//             nextVal = 1;
//         } else {
//             nextVal = ( 3 * nextVal) + 6;
//         }
//         return nextVal;
//     };
// })();

// var value = gimmeSomething();   // 1
// console.log("Value: ", value);
// value = gimmeSomething();       // 9
// console.log("Value: ", value);
// value = gimmeSomething();       // 33
// console.log("Value: ", value);
// value = gimmeSomething();       // 105
// console.log("Value: ", value);

var something = (function () {
	var nextVal;

	return {
		// needed for `for..of` loops
		[Symbol.iterator]: function () { return this; },

		next: function () {
			if (nextVal === undefined) {
				nextVal = 1;
			} else {
				nextVal = (3 * nextVal) + 6;
			}
			return { done: false, value: nextVal };
		}
	};
})();

// var value;
// value = something.next().value; // 1
// console.log('Value: ', value);
// value = something.next().value; // 9
// console.log('Value: ', value);
// value = something.next().value; // 33
// console.log('Value: ', value);
// value = something.next().value; // 105
// console.log('Value: ', value);

// for (var v of something) {
//     console.log( v );

//     if (v > 500) {
//         break;
//     }
// }

for (
	var ret;
	(ret = something.next()) && !ret.done;
) {
	console.log(ret.value);

	if (ret.value > 500) {
		break;
	}
};
