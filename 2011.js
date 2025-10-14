var finalValueAfterOperations = function(operations) {
    let x=0
    for(let ch of operations){
        if(ch=='X--' ||ch=='--X')x--
        else if(ch=='++X' ||ch=='X++')x++
    }return x
};