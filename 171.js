/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

    var i=0;
    var res = 0;
    for(var i=0; i<s.length; i++) {
        res += Math.pow(26, s.length-i-1) * arr[s[i].charCodeAt()-65];
    }

    return res; 
    
};