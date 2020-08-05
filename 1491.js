/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = salary[0];
    let max = salary[0];
    let len = salary.length;
    let desiredSum = 0;

    for(let i=0; i<len; i++) {
       if(salary[i]<min)
         min = salary[i];
       if(salary[i]>max)
         max = salary[i];  
    }

    for(let i=0; i<len; i++) {
       if((salary[i]!=min) && (salary[i]!=max))
         desiredSum+=salary[i]; 
    }

    return desiredSum/(len-2);
};