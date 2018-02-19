function decode(word){
	if (word[0] === 'a'){
		return word[1];
	}
	else if (word[0] === 'b'){
		return word[2];
	}
	else if (word[0] === 'c'){
		return word[3];
	}
	else if (word[0] === 'd'){
		return word[4];
	}
	else {
		return ' ';
	}
}

decode('apple');




function decode2(sentence){
	let sentenceArray = sentence.split(' ');
	let results = [];
	for (let i = 0; i < sentenceArray.length; i++){
		results += decode(sentenceArray[i])
	}
	return results;
}