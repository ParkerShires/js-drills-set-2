function beyond(num) {
	if (num === Infinity) {
		return 'And Beyond';
	}
	else if (num > 0) {
		return 'To infinity';
	}
	else if (num < 0) {
		return 'To Negative Infinity';
	} 
	else {
		return 'Staying Home';
	}
}

console.log(beyond(0));