//804. Unique Morse Code Words
var uniqueMorseRepresentations = function(words) {
	let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
	let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v', 'w', 'x', 'y', 'z'];
	let morseCode = [];
	let word = '';
	for(let i=0; i<words.length; i++){
		for(let j=0; j<words[i].length; j++){
			for(let k=0; k<alphabet.length; k++){
				if(words[i][j]==alphabet[k]){
					word+=morse[k];
					break;
				}
			}
		}
		morseCode.push(word);
		word='';
	}
	let distictArr = [...new Set(morseCode)] 
	return distictArr.length;
};
console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));