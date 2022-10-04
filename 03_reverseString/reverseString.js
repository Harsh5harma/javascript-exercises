const reverseString = function(str) {
    let x='';
    for (i=str.length-1;i>=0;--i){
        x+=str.charAt(i);
    }
    return x;
};

// Do not edit below this line
module.exports = reverseString;
