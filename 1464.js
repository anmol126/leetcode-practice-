/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length == 2)
    return (nums[0]-1)*(nums[1]-1); 
    
   let smaller;
   let greater;
   
   nums[0]>nums[1] ? (greater = 0, smaller = 1) : (greater = 1, smaller = 0); 

   for(let i=2; i<nums.length; i++) {
       if(nums[i]>=nums[greater]) {
           smaller = greater;
           greater = i;
       }
       else if(nums[i]>nums[smaller]) {
           smaller = i;
       }
   }

   return (nums[greater]-1)*(nums[smaller]-1);
};