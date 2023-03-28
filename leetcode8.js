//2535. Difference Between Element Sum and Digit Sum of an Array
var differenceOfSum = function(nums) {
	let elementSum = 0;
	let digitSum = 0;
	let newNums=[];
	for(let i=0; i<nums.length; i++){
		elementSum+=nums[i];
		if(nums[i].toString().length>1){
			newNums.push(nums[i].toString());
		}
		else{
			digitSum+=nums[i];
		}
		
	}
	if(newNums.length>0){
		for(let i=0; i<newNums.length; i++){
			for(let j=0; j<newNums[i].length; j++){
				digitSum+=parseInt(newNums[i][j]);
			}
		}
	}
	return elementSum-digitSum;

    
};
console.log(differenceOfSum([1,2,3,4]));