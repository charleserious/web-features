/**
 * Sorting with array sounds very simple.
 * But what if we need to compare something more complex than usual numbers array.
 * For this example, we will have an aray of objects,
 * the weight of which are either in pounds(lbs) or kilograms(kg)
 * and we need to sort them in ascending order based on weight.
 */

// Definition of our compareison function
const sortByWeight = (x, y) => {
	const xWeightKG = x.measurement === 'kg' ? x.weight : x.weight * 0.453592;
	const yWeightKG = y.measurement === 'kg' ? y.weight : y.weight * 0.453592;
	return xWeightKG > yWeightKG ? 1 : -1;
};

// Just tow slightly diffenent lists of data,
// that need to be sorted based on weight.
const firstList = [
	{ name: 'John', weight: 220, measurement: 'lbs' },
	{ name: 'Kate', weight: 58, measurement: 'kg' },
	{ name: 'Mike', weight: 137, measurement: 'lbs' },
	{ name: 'Sophie', weight: 66, measurement: 'kg' }
];

const secondList = [
	{ name: 'Margaret', weight: 161, measurement: 'lbs', age: 51 },
	{ name: 'Bill', weight: 76, measurement: 'kg', age: 62 },
	{ name: 'Jonathan', weight: 72, measurement: 'kg', age: 43 },
	{ name: 'Richard', weight: 74, measurement: 'kg', age: 29 }
];

// Using the sorting function we defined to sort both lists
firstList.sort(sortByWeight);	// Kate -> Mite -> Sophie -> John
secondList.sort(sortByWeight);	// Jonathan -> Margaret -> Richard -> Bill
console.table(firstList);
console.table(secondList);
