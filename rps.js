 function rockPaperScissors(number){
	if (number < 1 || number > 3){
		throw new Error("Number must be 1 - 3");
	}
	const randomNo = Math.floor(Math.random() * 3) + 1;
	if (number === 1){
		if (randomNo === 1){
			console.log('You tied');
		}
		else if (randomNo === 2){
			console.log('You lost');
		}
		else {
			console.log('You won');
		}
	}
	else if (number === 2){
		if (randomNo === 2){
			console.log('You tied');
		}
		else if (randomNo === 3){
			console.log('You lost');
		}
		else {
			console.log('You won');
		}
	}
	else {
		if (randomNo === 3){
			console.log('You tied');
		}
		else if (randomNo === 1){
			console.log('You lost');
		}
		else {
			console.log('You won');
		}
	}
 }