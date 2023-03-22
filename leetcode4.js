//26. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
	let x = nums[0];
	for(let i=1; i<nums.length;i++){
		if(nums[i]==x){
			nums.splice(i,1);
			i--;
		}
		else{
			x=nums[i];
		}
	}
	return nums.length;
    
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));