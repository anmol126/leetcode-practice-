/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let output = nums[0];

for(var i=1; i<nums.length; i++) {
   output = output^nums[i];
}

return output;
    
};