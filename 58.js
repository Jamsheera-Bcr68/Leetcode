var lengthOfLastWord = function(s) {
    let array=s.split(' ')

    for(let i=array.length-1;i>=0;i--){
        if(array[i].length!==0){
            return array[i].length
        }
    }
}

let s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))