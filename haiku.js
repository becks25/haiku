/*
	1. Take in and parse through the dictionary file
	2. Create function to find words with the right number of syllables
	3. Create haiku
*/

var fs = require('fs');

var dictionary = fs.readFileSync('cmudict.txt').toString();

dictionary = dictionary.split('\n');

console.log(countSyllables(2) + " " + countSyllables(3));
console.log(countSyllables(1) + " " + countSyllables(3) + " " + countSyllables(3));
console.log(countSyllables(3) + " " + countSyllables(2));


function countSyllables(num){
	var letters = /\d+/g;
	var tempArray = [];
	for(var i = 0; i<dictionary.length; i++){
		var temp = dictionary[i].match(letters);
		if(temp !== null){
			if(temp.length === num){
				tempArray.push(dictionary[i].split('  ')[0]);
			}
		}
	}

	var rand = Math.ceil(Math.random()*tempArray.length);
	return tempArray[rand];

}