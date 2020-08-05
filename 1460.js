/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target.sort(compare);
    arr.sort(compare);

    let len = target.length;

    for(let i=0; i<len; i++) {
      if(target[i]!=arr[i])
      return false;
    }
    return true;
};

function compare(a,b) {
    return a-b;
}