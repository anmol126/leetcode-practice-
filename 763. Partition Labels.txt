/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    
    // your code goes here

var s;

var count=0;
var countArr = [];


while(S.length>0) {
    s = "";
    s = S[0];
    S = S.substring(1);
    var i=0;
    var j=0;

    while (i < s.length) {

        var index = S.indexOf(s[i]);
        if (index > -1) {
            j = index;
            s += S.substring(0, j + 1);
            S = S.substring(j + 1);
            i++;
        }
        else {
            i++;
        }
    }

    countArr.push(s.length);

}
    return countArr;
    
};