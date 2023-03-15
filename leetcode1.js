var longestCommonPrefix = function(strs) {
	let arr = []; 
	for(let i=0; i<strs.length; i++){
		arr.push(strs[i].length);
		
	}
	let final = '';
	for(let i=0; i<Math.min(...arr); i++){
		let l = strs[0][i];
		let b = true;
		for(j=1; j<strs.length; j++){
			if(l!=strs[j][i]){
				b=false;
				break;
			}
		}
		if(b){
			final+=l;
		}
		else{
			break;
		}
	}
	return final;
    
};
console.log(longestCommonPrefix(["cir","car"]));