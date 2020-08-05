/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let len = A.length;
  
      if(A[0]>A[1] && A[1]>A[2])
       return 0;
      
      if(A[len-3]<A[len-2] && A[len-2]<A[len-1])
       return len-1;
  
      for(let i=0; i<A.length-2; i++) {
         if(A[i]<A[i+1] && A[i+1]>A[i+2])
          return i+1;; 
      }  
  };