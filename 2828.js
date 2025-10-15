var isAcronym = function(words, s) {
    let ns=words.map(word=>word.charAt(0)).join('')
    return ns===s
};