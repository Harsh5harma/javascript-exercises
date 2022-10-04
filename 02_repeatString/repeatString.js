const repeatString = function(str,num) {
    if (num===0)
        return '';
    if (num<0)
        return "ERROR";
    let strm=str;
    for (i=0;i<num-1;i++)
        str+=strm;
    return str;
};

// Do not edit below this line
module.exports = repeatString;
