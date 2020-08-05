/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let arrayLen = nums.length;
    let matchedPairs = 0;
    for(let i=1; i<arrayLen; i++) {
        for(let j=0; j<i; j++) {
           if(nums[i]==nums[j])
            matchedPairs++;
        }
    }
    return matchedPairs;
};