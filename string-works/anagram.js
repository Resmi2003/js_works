// anagram
// means if there are 2 words then 2nd word contains all letters of 1st word.that is 1st and 2nd word contains all letters same

function isAnagram(word1,word2){

   let anagram = true;
    
    if(word1.length != word2.length){
        anagram = false;
    }
    
    for(let ch of word2){
        if(word1.indexOf(ch)==-1){
            anagram = false;
            break;
        }
    }
    return anagram;
}


console.log(isAnagram("listen","silent"));
