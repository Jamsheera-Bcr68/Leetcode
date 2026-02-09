var convertToTitle = function(columnNumber) {
    let res=''
    while(columnNumber>=1){
        let bal=Math.floor(columnNumber/26)
        res+=String.fromCharCode(columnNumber+64)
        columnNumber=columnNumber%26
    }
    return res
};

console.log(convertToTitle(1));
