/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let finalArray = [];

    for(let i=0; i<prices.length; i++) {
        let smallest=9999;
        for(let j=i+1; j<prices.length; j++) {
            if(prices[j]<=smallest && prices[j]<=prices[i]) {
                smallest = prices[j];
                break; 
            }
        }
        if(smallest == 9999)
          smallest = 0;
        finalArray.push(prices[i]-smallest);    
    }
    return finalArray;
};