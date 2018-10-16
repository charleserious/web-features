// An array of people
const friends = [
	{ name: 'John', gender: 'male' },
	{ name: 'Kate', gender: 'female' },
	{ name: 'Mike', gender: 'male' },
	{ name: 'Sophie', gender: 'female' },
	{ name: 'Richard', gender: 'male' },
	{ name: 'Keith', gender: 'male' }
];

// A simple filter based on gender
const isMale = (x) => {
	return x.gender === 'male';
};

const males = friends.filter(isMale);

console.table(friends);
// Should output
// ┌─────────┬───────────┬──────────┐
// │ (index) │   name    │  gender  │
// ├─────────┼───────────┼──────────┤
// │    0    │  'John'   │  'male'  │
// │    1    │  'Kate'   │ 'female' │
// │    2    │  'Mike'   │  'male'  │
// │    3    │ 'Sophie'  │ 'female' │
// │    4    │ 'Richard' │  'male'  │
// │    5    │  'Keith'  │  'male'  │
// └─────────┴───────────┴──────────┘
console.table(males);
// Should output
// ┌─────────┬───────────┬────────┐
// │ (index) │   name    │ gender │
// ├─────────┼───────────┼────────┤
// │    0    │  'John'   │ 'male' │
// │    1    │  'Mike'   │ 'male' │
// │    2    │ 'Richard' │ 'male' │
// │    3    │  'Keith'  │ 'male' │
// └─────────┴───────────┴────────┘
