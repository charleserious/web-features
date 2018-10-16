const nums = [5, 9, 7];

console.log('I', nums);

nums.forEach(function (num, index) {
	const increased = nums[index] = num + 1;
	return increased;
});

console.log('O', nums);
