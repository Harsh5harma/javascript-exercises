const removeFromArray = function() {
    let arr = arguments[0];
    for (i=1;i<arguments.length;++i){
        let pos = arr.indexOf(arguments[i]);
        if (pos===-1)
            continue;
        arr.splice(pos,1);
    }

    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
