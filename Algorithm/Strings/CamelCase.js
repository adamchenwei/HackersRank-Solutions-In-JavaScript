function main() {
    var s = readLine();
    let wordCache = '';
    let wordCount = 0;
    
    let array = s.split('');
    array.forEach((letter, index)=> {
        if (index === 0) {
            wordCount ++;
        } else {
            if (letter === letter.toUpperCase()) {
                  wordCount ++;
            }
        }
    });
    
    console.log(wordCount);
}
