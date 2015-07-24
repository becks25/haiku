/*
	1. Take in and parse through the dictionary file
	2. Create function to find words with the right number of syllables
	3. Create haiku
*/

var fs = require('fs');

var dictionary = fs.readFileSync('cmudict.txt').toString();

dictionary = dictionary.split('\n');

countSyllables(5);
countSyllables(7);
countSyllables(5);


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
	console.log(tempArray[rand]);

}