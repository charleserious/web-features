// An array of articles with their tags.
const articles = [
	{ title: 'Introduction to JavaScript Scope', tags: [ 'JavaScript', 'Variables', 'Scope' ] },
	{ title: 'JavaScript Closures', tags: [ 'JavaScript', 'Variables', 'Closures' ] },
	{ title: 'A Guide to PWAs', tags: [ 'JavaScript', 'PWA' ] },
	{ title: 'JavaScript Functional Programming Examples', tags: [ 'JavaScript', 'Functional', 'Function' ] },
	{ title: 'Why JavaScript Closures are Important', tags: [ 'JavaScript', 'Variables', 'Closures' ] }
];

// A function that reduces the above array to an array based on tags.
const tagView = (accumulator, x) => {
	// For every tag in the article's tag array
	x.tags.forEach(currentTag => {
		// Create a function to check if it matches
		const findCurrentTag = (y) => { return y.tag === currentTag; };
		// Check if it's already jin the accumulator array
		if (accumulator.some(findCurrentTag)) {
			// Find it and get it's index
			// const existingTag = accumulator.find(findCurrentTag);
			const existingTagIndex = accumulator.findIndex(findCurrentTag);
			// Update the number and array of articles
			accumulator[existingTagIndex].count += 1;
			accumulator[existingTagIndex].articles.push(x.title);
		} else {
			// Otherwise add the tag to the accumulator array
			accumulator.push({ tag: currentTag, count: 1, articles: [ x.title ] });
		}
	});
	// Return the accumulator array
	return accumulator;
};

// Transform the original array
const reducedTag = articles.reduce(tagView, []);
console.table(articles);
console.log(reducedTag);
