const inums = [5, 9, 7];

console.log('I', inums);

const onums = inums.map(function (num) {
	const increased = num + 1;
	return increased;
});// .sort();

console.log('O', onums);
