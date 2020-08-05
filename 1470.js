/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let shuffledArray=[];
    let iterator=n;
    let i=0;

    while(iterator--) {
        shuffledArray.push(nums[i]);
        shuffledArray.push(nums[i+n]);
        i++;
    }
    return shuffledArray;
    
};