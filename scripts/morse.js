// 1. Morse code object
const alphabetMorseCodeNumber = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  "?": "..--..",
  "!": "-.-.--",
  ".": ".-.-.-",
  ";": "-.-.-.",
  ":": "---...",
  "+": ".-.-.",
  "-": "-....-",
  "/": " ",
  "=": "-...-",
};

// 2. Access DOM elements
const textInput = document.querySelector("#morse__textInput");
const morseInput = document.querySelector("#morse__morseInput");
const output = document.querySelector("#morse__output");

// 3. Add function to swap the key value pairs over for morse to english translation (Chike assisted with this)
export const swapMorseCode = () => {
  return Object.fromEntries(
    Object.entries(alphabetMorseCodeNumber).map(([key, value]) => [value, key])
  );
};

// 3. Function translate text to morse code
export const translateText = (text) => {
  // 3.1 Create an empty string to store the translated morse code
  let translatedMorseCode = "";
  // 3.2 Loop through the text
  for (let i = 0; i < text.length; i++) {
    // 3.3 If the text is a space
    if (text[i] === " ") {
      // 3.4 Add a space to the translated morse code
      translatedMorseCode += "/ ";
    } else {
      // 3.5 Add the corresponding morse code to the translated morse code
      translatedMorseCode +=
        alphabetMorseCodeNumber[text[i].toLowerCase()] + " ";
    }
  }
  return translatedMorseCode.trim();
};

// 4. Function translate morse code to text
export const translateMorseCode = (morseCode) => {
  // 4.1 Split the morse code into an array
  let morseCodeArr = morseCode.split(" ");
  console.log("morse code: ", morseCode);
  let translatedText = "";
  // 4.2 Call the function that swaps morse code
  let swappedMorseCode = swapMorseCode();
  console.log("swapped morse code for translation: ", swappedMorseCode);
  // 4.3 Flag to track if it's the beginning of a sentence
  let isFirstWord = true;
  // 4.4 To track the last character processed
  let lastChar = "";
  // 4.5 Loop through the morse code
  for (let i = 0; i < morseCodeArr.length; i++) {
    // 4.6 If the morse is a space
    if (morseCodeArr[i] === "/") {
      // 4.7 Add a space to the translated text
      translatedText += " ";
      if (i < morseCodeArr.length - 1 && morseCodeArr[i + 1] === "/") {
        // 4.8 Next word should start with a capital letter"
        isFirstWord = true;
        // 4.9 Skip the next space as well
        i++; 
      }
    } else if (swappedMorseCode[morseCodeArr[i]] !== undefined) {
      // 4.10 Add the corresponding text to the translated text if it's not undefined
      if (isFirstWord || ".!?".includes(lastChar)) {
        translatedText += swappedMorseCode[morseCodeArr[i]].toUpperCase();
        isFirstWord = false;
      } else {
        translatedText += swappedMorseCode[morseCodeArr[i]];
        continue;
      }
    }
    if (morseCodeArr[i] !== "/") {
      // 4.11 Update last character if not a space
      lastChar = swappedMorseCode[morseCodeArr[i]] || "";
    }
  }
  console.log("Translated Text:", translatedText);
  // 4.12 Capitalize the first letter of each sentence
  // 4.13 Capitalize the first letter after a full stop, exclamation mark, or question mark
  translatedText = translatedText.replace(
    /(^|[.!?]\s+)([a-z])/g,
    (match, p1, p2) => p1 + p2.toUpperCase()
  );
  return translatedText;
};
// 5. Function to check if a character is valid
export const isValidCharacter = (char) => {
  return /^[a-zA-Z0-9\.\?\!\;\:\+\-\/\= ]$/.test(char);
};

// 6.Function text input
export const inputTexts = () => {
  // 6.1 Check if there is text input 
  // 6.2 Ensure textInput is not null or undefined
  if (textInput && textInput.value !== "") { 
    // 6.3 Clear the output
    output.textContent = "";
    // 6.4 Clear the morse input
    morseInput.value = "";
    // 6.5 Get the value of the text input
    let inputText = textInput.value;

    // 6.6 Validate each character
    inputText = inputText.split("").filter(char => isValidCharacter(char)).join("");

    // 6.7 Update the text input value
    textInput.value = inputText;

    // 6.8 Translate text if input is not empty after validation
    if (inputText !== "") {
      output.textContent = translateText(inputText);
    }
  } 
}

// 7. function morse input
export const inputMorseCode = () => {
  // 7.1 Check if there is morse code input
  if (morseInput && morseInput.value !== "") {
    // 7.2 Clear the output
    output.textContent = "";
    // 7.3 Clear the text input
    textInput.value = "";
    // 7.4 Get the value of the morse code input
    const inputMorse = morseInput.value;
    console.log("input morse: ", inputMorse);
    output.textContent = translateMorseCode(inputMorse);
  }
};

console.log(translateMorseCode(".- .-. ."));

document.addEventListener("DOMContentLoaded", function () {
  // 8. Identify all DOM elements
  const translateTextButton = document.querySelector("#text__translateButton");
  const translateMorseCodeButton = document.querySelector(
    "#morse__translateButton"
  );
  const resetButton = document.querySelector("#morseText__resetButton");
  const morseFormText = document.querySelector("#morse__form__text");
  const morseFormMorse = document.querySelector("#morse__form__morse");
  const output = document.querySelector("#morse__output");

  // 9. Hide the output and reset button initially
  output.style.display = "none";
  resetButton.style.display = "none";

  // 10. Event listener for translateTextButton
  translateTextButton.addEventListener("click", () => {
    //10.1 Check if there is text input
    if(textInput.value === "") {
      alert("Please enter a valid text");
      return;
    }
    // 10.2 Hide morse input and label
    morseFormMorse.style.display = "none";
    // 10.3 Show output and reset button
    output.style.display = "block";
    resetButton.style.display = "block";
    inputTexts();
  });

  // 11. Event listener for translateMorseCodeButton
  translateMorseCodeButton.addEventListener("click", () => {
    // 11.1 Check if there is morse code input
    if( morseInput.value === "") {
      alert("Please enter a valid morse code");
      return;
    }
    // 11.2 Hide text input and label
    morseFormText.style.display = "none";
    // 11.3 Show output and reset button
    output.style.display = "block";
    resetButton.style.display = "block";
    inputMorseCode();
  });

  // 13. Event listener for input on text input field
textInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const validCharacters = /^[a-zA-Z0-9\.\?\!\;\:\+\-\/\= ]*$/;

  // 13.1 Validate each character
  const filteredValue = inputValue.split("").filter(char => validCharacters.test(char)).join("");

  // 13.2 Update the text input value
  event.target.value = filteredValue;
});

// 14. Event listener for input on morse input field
morseInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const validCharacters = /^[.\-\s/]*$/; // Valid characters: ".", "-", "/", and whitespace

  // 14.1 Validate each character
  const filteredValue = inputValue.split("").filter(char => validCharacters.test(char)).join("");

  // 14.2 Update the morse input value
  event.target.value = filteredValue;
});

  // 15. Event listener for the reset button
  resetButton.addEventListener("click", () => {
    // 15.1 Show text input and label, hide morse input and label
    morseFormText.style.display = "flex";
    morseFormMorse.style.display = "flex";
    // 15.2 Hide output and reset button
    output.style.display = "none";
    resetButton.style.display = "none";
    // 15.3 Clear the text input
    textInput.value = "";
    // 15.4 Clear the morse input
    morseInput.value = "";
    // 15.5 Clear the output
    output.textContent = "";
  });
});
