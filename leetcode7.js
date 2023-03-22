//58. Length of Last Word
var lengthOfLastWord = function(s) {
    let len = [];
    let check = true;
    let count=0;
    for(let i=0; i<s.length; i++){
    	if(s[i]!=' '){
    		count++;
  		  }
    	else{
    		if(count>0){
    			len.push(count);
    			count=0;
    		}

    	}
    	if(i==s.length-1){
    		if(count>0){
    			len.push(count);
    		}
    	}
    }
    return len[len.length-1];
};
console.log(lengthOfLastWord("luffy is still joyboy"));