// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the character is a letter
    if (/[a-zA-Z]/.test(char)) {
      let code = str.charCodeAt(i);

      // Adjust the character code based on the ROT13 cipher
      if (code >= 65 && code <= 90) {
        // Uppercase letters (A-Z)
        code = ((code - 65 + 13) % 26) + 65;
      } else if (code >= 97 && code <= 122) {
        // Lowercase letters (a-z)
        code = ((code - 97 + 13) % 26) + 97;
      }

      result += String.fromCharCode(code);
    } else {
      // Non-letter characters are appended as is
      result += char;
    }
  }

  return result;
}