// An array of objects.

const friends = [
	{ name: 'John', surname: 'Smith', age: 52 },
	{ name: 'Sarah', surname: 'Smith', age: 49 },
	{ name: 'Michael', surname: 'Jones', age: 46 },
	{ name: 'Garry', surname: 'Thomas', age: 48 }
];

// A simple function to get just the name and surname in one string
const fullname = (x) => {
	return `${x.name} ${x.surname}`;
};

const inString = friends.map(fullname);
console.table(inString);
// Should output
// ┌─────────┬─────────────────┐
// │ (index) │     Values      │
// ├─────────┼─────────────────┤
// │    0    │  'John Smith'   │
// │    1    │  'Sarah Smith'  │
// │    2    │ 'Michael Jones' │
// │    3    │ 'Garry Thomas'  │
// └─────────┴─────────────────┘
