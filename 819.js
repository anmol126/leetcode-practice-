/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    

    let lowerP = paragraph.toLowerCase();
    
    let arr = lowerP.split(' ');
    
    var pushArr = [];
    
    arr.forEach(function(word, i) {
       
          for(let j=0; j<word.length; j++) {
            if(!(word.charCodeAt(j) >= 97 && word.charCodeAt(j) <= 122)) {
            
                word = word.slice(0,j)+word.slice(j+1);	
            }
               
          }
               pushArr.push(word);
    });
    
    var newArr = [];
    
    pushArr.forEach(function(eachW, i) {
        if(newArr[eachW]==undefined) {
           newArr[eachW]=1;	
        }
          
        else
          newArr[eachW]++;
    });
    
    let count = 0;
    let highestCount = 0;
    let str = "";
    
    pushArr.forEach(function(eachW, i) {
        if(!(banned.indexOf(eachW)>-1 || (newArr[eachW]==undefined)))
        {
           count = newArr[eachW];
           if(count> highestCount) {
            highestCount = count;
            str = eachW;
         }    
        }
    });
    
    return str;
    
    
        
    };