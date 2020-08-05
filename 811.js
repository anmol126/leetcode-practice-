/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    
    let firstArr = {};
    let secondArr = {};
    let thirdArr = {};
    
    cpdomains.forEach(function(eachInput, i) {
         let splitter = eachInput.split(' ');
         let value = Number(splitter[0]);
        
         let domainArr = splitter[1].split('.');
         
         if(domainArr.length==3)
          {
             if(firstArr[domainArr[2]]===undefined)
               firstArr[domainArr[2]]=value;
             else
               firstArr[domainArr[2]]+=value;
               
             if(secondArr[domainArr[1]+"."+domainArr[2]]===undefined)
               secondArr[domainArr[1]+"."+domainArr[2]]=value;
             else
               secondArr[domainArr[1]+"."+domainArr[2]]+=value;
               
             if(thirdArr[domainArr[0]+"."+domainArr[1]+"."+domainArr[2]]===undefined)
               thirdArr[domainArr[0]+"."+domainArr[1]+"."+domainArr[2]]=value;
             else
               thirdArr[domainArr[0]+"."+domainArr[1]+"."+domainArr[2]]+=value;    
          }
          else if(domainArr.length==2) {
              
              if(firstArr[domainArr[1]]===undefined)
                firstArr[domainArr[1]]=value;
             else
               firstArr[domainArr[1]]+=value;
               
             if(secondArr[domainArr[0]+"."+domainArr[1]]===undefined)
               secondArr[domainArr[0]+"."+domainArr[1]]=value;
             else
               secondArr[domainArr[0]+"."+domainArr[1]]+=value;
          }
          else {
              if(firstArr[domainArr[0]]===undefined)
                firstArr[domainArr[0]]=value;
             else
               firstArr[domainArr[0]]+=value;
          }
    });
    
    let allArr = [];
    
    for(let key in firstArr) {
       allArr.push(firstArr[key]+" " + key);
    }
    
    for(let key in secondArr) {
       allArr.push(secondArr[key]+" "+key);
    }
    
    for(let key in thirdArr) {
       allArr.push(thirdArr[key]+" "+key);
    }
    
    return allArr;
        
    }