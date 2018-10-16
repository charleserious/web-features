// An array of high scores. Notice that some of them don't have a name specificed

const highScores = [
	{ score: 237, name: 'Jim' },
	{ score: 108, name: 'Kit' },
	{ score: 91, name: 'Rob' },
	{ score: 0 },
	{ score: 0 }
];

// Simple reusable functions that check if an items has a name or not
// and if item has a score larget than zero.
const hasName = (x) => {
	return typeof x['name'] !== 'undefined';
};

const hasNoName = (x) => {
	return !hasName(x);
};

const greaterThanZeroHighScore = (x) => {
	return x.score > 0;
};

// Fill in the blank names until none exist.
while (!highScores.every(hasName)) {
	const highScore = highScores.find(hasNoName);
	highScore.name = '---';
	const highScoreIndex = highScores.findIndex(hasNoName);
	highScores[highScoreIndex] = highScore;
}

console.table(highScores);

// Check if non-zero scores exist and print them out.
if (highScores.some(greaterThanZeroHighScore)) {
	console.table(highScores.filter(greaterThanZeroHighScore));
} else {
	console.log('No non-zero high scores!');
}
