//1816. Truncate Sentence
var truncateSentence = function(s, k) {
	let arr = [];
	let word = '';
	let finalWord = '';
	for(let i=0; i<s.length; i++){
		if(s[i]!= ' '){
			if(s.length-1==i){
				word+=s[i];
				arr.push(word);
			}
			word+=s[i];
		}
		else{
			arr.push(word)
			word='';
		}
	}
	for(let i=0; i<k; i++){
		if(i!=k-1){
			finalWord+=arr[i];
			finalWord+=' ';
		}
		else{
			finalWord+=arr[i];
		}
	}
	return finalWord;

};
console.log(truncateSentence("chopper is not a tanuki", 5));