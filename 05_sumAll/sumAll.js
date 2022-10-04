const sumAll = function(start,end) {
    if (!Number.isInteger(end))
        return "ERROR";
    let min=0;
    let max=0;
    if (start>end){
        min = end;
        max = start;
    }else{
        min = start;
        max = end;
    }
    
    if (min<0||max<0)
        return "ERROR";
    let sum=0;
    for (i=min;i<=max;++i){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
