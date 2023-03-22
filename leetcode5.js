//28. Find the Index of the First Occurrence in a String
var strStr = function(haystack, needle) {
	for(let i=0; i<haystack.length;){
		let temp = i;
		if(needle[0]==haystack[i]){
			for(let j=0; j<needle.length; j++){
				if(haystack[i]==needle[j]){
					i++;
					if(j==needle.length-1){
						return (i-needle.length);
					}
				}
				else{
					i=temp;
					i++;
					break;
				}
			}
		}
		else{
			i++;
		}
	}
	return -1;
};
console.log(strStr("sadbutsad",  "sad"));