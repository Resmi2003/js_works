// Function that checks if two strings are anagrams

function isAnagram(firstString, secondString) {

  if (firstString.length != secondString.length)
    return false;

  for (let i = 0; i < firstString.length; i++) {

    let found = false;

    for (let check = 0; check < secondString.length; check++) {
      if (firstString[i] == secondString[check]) {
        found = true;
        break;
      }
    }

    if (found == false)
      return false;
  }

  return true;
}

console.log(isAnagram("listen", "silent"));