/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let xorArray = [];
    let i=0;

    while(i<n) {
        xorArray.push(start+2*i);
        i++;
    }

    let XoredResult=0;

    for (eachXorElement of xorArray)
      XoredResult^=eachXorElement;
    
    return XoredResult;
};