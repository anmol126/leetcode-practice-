/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(input) {
    
    let obj = {};
    for(let i=0; i<input.length; i++) {
        if(obj[input[i]])
           obj[input[i]]++;
        else
           obj[input[i]]=1;      
    }
    let maxSoFar = 0;
    let elem = input[0];
    for(let i in obj) {
       if(maxSoFar<obj[i])
        {
          maxSoFar = obj[i];
           elem = i;
        }     
    }
    let pushArr = [];
    for(let i in obj) {   
        if(obj[i]==maxSoFar)
          pushArr.push(Number(i));        
    }
    
    let minDiff = input.length;
    
    for(let i=0; i<pushArr.length; i++) {
        
     let diff = input.lastIndexOf(pushArr[i])-input.indexOf(pushArr[i]);
    
    if(diff<minDiff)
      minDiff = diff;
    }
    
    return minDiff+1;
    
    
        
    };