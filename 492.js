// your code goes here
/**
 * @param {number} area
 * @return {number[]}
 */

var isPrime = function(val) {
    
    let primeTest = Math.floor(Math.sqrt(val));
    let flag = true;
    
    for(let i=2; i<=primeTest; i++) {
        if(val%i===0)
        {
            flag = false;
            break;
        }
    }
    
   return flag;
}

var constructRectangle = function(area) {
    
    
let val = Math.sqrt(area);

if(isPrime(area)) {
    return [area,1];
}

    
else if(val%1===0) {
   
   return [val,val];
   
}
else {
   
   val = Math.floor(val);
   for(let i=val; i>1; i--) {
       if(area%i===0) {
          return [area/i,i];	
       }	
   }	
}
    
}
