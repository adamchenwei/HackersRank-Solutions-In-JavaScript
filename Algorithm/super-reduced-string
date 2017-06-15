//Super Reduced String

function super_reduced_string(s){
    let resultCacheArray = [];
    let suppliedArray = s.split('');
    suppliedArray.forEach((letter, index) => {
        if (letter === resultCacheArray[resultCacheArray.length -1]) {
            resultCacheArray.splice(-1, 1);
        } else {
            resultCacheArray.push(letter);
        }
    });
    return resultCacheArray.join('') || 'Empty String';
}
