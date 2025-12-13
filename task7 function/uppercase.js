// Function to convert the first letter of each word to uppercase (Title Case)

function titleCase(sentence) {

    let resultSentence = "";

    for (let i = 0; i < sentence.length; i++) {

        if (i == 0 || sentence[i - 1] == " ") {

            resultSentence += sentence[i].toUpperCase();
        }

        else {
            resultSentence += sentence[i];
        }
    }

    return resultSentence;
}

console.log(titleCase("hello world"));