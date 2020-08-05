/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let i = 0;
   let strlen = str.length;
   let scratchStr = "";

   while(i<strlen) {  
     (str.charCodeAt(i) < 96 && str.charCodeAt(i) > 64) ? scratchStr+=String.fromCharCode(str.charCodeAt(i)+32) : scratchStr+=str[i];
     scratchStr;
     i++;
   }
   return scratchStr;
};