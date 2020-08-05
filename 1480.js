/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let accumulatedSum=0;
    let runningSum=[];
    for (num of nums) {
      accumulatedSum = accumulatedSum+num;
      runningSum.push(accumulatedSum);  
    }
    return runningSum;
};