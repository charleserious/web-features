var a = [1, 3, 5, 7, 9];

var it = a[Symbol.iterator]();

var value;
value = it.next().value;		// 1
console.log('Value', value);
value = it.next().value;		// 3
console.log('Value', value);
value = it.next().value;		// 5
console.log('Value', value);
