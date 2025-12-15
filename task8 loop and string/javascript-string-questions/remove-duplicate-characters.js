// Write a program to remove duplicate characters from a string

  let text = "programming";
  let resultText = "";

  for (let i = 0; i < text.length; i++) {

    let duplicateFound = false;

    for (let check = 0; check < resultText.length; check++) {

      if (text[i] == resultText[check]) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound == false)
      resultText += text[i];
  }

  console.log(resultText);
  


