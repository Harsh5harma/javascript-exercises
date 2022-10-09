const palindromes = function (str) {
    let rstr="";
    let nstr="";
    for (let i =0;i<str.length;++i){
        if (str[i]===' '||str[i]===','||str[i]==='.'||str[i]==='!')
            continue;
        else
            nstr+=str[i].toLowerCase();
    }
    for (let i =nstr.length-1;i>=0;--i){
        rstr+=nstr[i];
    }
    return rstr===nstr;
};

// Do not edit below this line
module.exports = palindromes;
