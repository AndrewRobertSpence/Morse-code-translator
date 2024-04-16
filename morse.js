// morse code object
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

// access DOM elements
const textInput = document.querySelector("#morse__textInput");
const morseInput = document.querySelector("#morse__morseInput");
const output = document.querySelector("#morse__output");

// add function to swap the key value pairs over for morse to english translation (Chike assisted with this)
export const swapMorseCode = () => {
  return Object.fromEntries(
    Object.entries(alphabetMorseCodeNumber).map(([key, value]) => [value, key])
  );
};

// Function translate text to morse code
export const translateText = (text) => {
  // create an empty string to store the translated morse code
  let translatedMorseCode = "";
  // loop through the text
  for (let i = 0; i < text.length; i++) {
    // if the text is a space
    if (text[i] === " ") {
      // add a space to the translated morse code
      translatedMorseCode += "/ ";
    } else {
      // add the corresponding morse code to the translated morse code
      translatedMorseCode +=
        alphabetMorseCodeNumber[text[i].toLowerCase()] + " ";
    }
  }
  return translatedMorseCode.trim();
};

// Function translate morse code to text
export const translateMorseCode = (morseCode) => {
  // split the morse code into an array
  let morseCodeArr = morseCode.split(" ");
  console.log("morse code: ", morseCode);
  let translatedText = "";
  // call the function that swaps morse code
  let swappedMorseCode = swapMorseCode();
  console.log("swapped morse code for translation: ", swappedMorseCode);
  // Flag to track if it's the beginning of a sentence
  let isFirstWord = true;
  // To track the last character processed
  let lastChar = "";
  // loop through the morse code
  for (let i = 0; i < morseCodeArr.length; i++) {
    // if the morse is a space
    if (morseCodeArr[i] === "/") {
      // add a space to the translated text
      translatedText += " ";
      if (i < morseCodeArr.length - 1 && morseCodeArr[i + 1] === "/") {
        // Next word should start with a capital letter"
        isFirstWord = true;
        i++; // Skip the next space as well
      }
    } else if (swappedMorseCode[morseCodeArr[i]] !== undefined) {
      // add the corresponding text to the translated text if it's not undefined
      if (isFirstWord || ".!?".includes(lastChar)) {
        translatedText += swappedMorseCode[morseCodeArr[i]].toUpperCase();
        isFirstWord = false;
      } else {
        translatedText += swappedMorseCode[morseCodeArr[i]];
      }
    }
    if (morseCodeArr[i] !== "/") {
      // Update last character if not a space
      lastChar = swappedMorseCode[morseCodeArr[i]] || "";
    }
  }
  console.log("Translated Text:", translatedText);
  // Capitalize the first letter of each sentence
  // Capitalize the first letter after a full stop, exclamation mark, or question mark
  translatedText = translatedText.replace(
    /(^|[.!?]\s+)([a-z])/g,
    (match, p1, p2) => p1 + p2.toUpperCase()
  );
  return translatedText;
};
// Function to check if a character is valid
export const isValidCharacter = (char) => {
  return /^[a-zA-Z0-9\.\?\!\;\:\+\-\/\= ]$/.test(char);
};

// Function text input
export const inputTexts = () => {
  // Check if there is text input 
  // Ensure textInput is not null or undefined
  if (textInput && textInput.value !== "") { 
    // Clear the output
    output.textContent = "";
    // Clear the morse input
    morseInput.value = "";
    // Get the value of the text input
    let inputText = textInput.value;

    // Validate each character
    inputText = inputText.split("").filter(char => isValidCharacter(char)).join("");

    // Update the text input value
    textInput.value = inputText;

    // Translate text if input is not empty after validation
    if (inputText !== "") {
      output.textContent = translateText(inputText);
    }
  } else {
    alert("Please enter a valid text");
  }
}


// function morse input
export const inputMorseCode = () => {
  // Check if there is morse code input
  if (morseInput && morseInput.value !== "") {
    // Clear the output
    output.textContent = "";
    // Clear the text input
    textInput.value = "";
    // Get the value of the morse code input
    const inputMorse = morseInput.value;
    console.log("input morse: ", inputMorse);
    output.textContent = translateMorseCode(inputMorse);
  } else {
    alert("Please enter a valid morse code");
  }
};

console.log(translateMorseCode(".- .-. ."));

document.addEventListener("DOMContentLoaded", function () {
  // identify all DOM elements
  const translateTextButton = document.querySelector("#text__translateButton");
  const translateMorseCodeButton = document.querySelector(
    "#morse__translateButton"
  );
  const resetButton = document.querySelector("#morseText__resetButton");
  const morseFormText = document.querySelector("#morse__form__text");
  const morseFormMorse = document.querySelector("#morse__form__morse");
  const output = document.querySelector("#morse__output");

  // Hide the output and reset button initially
  output.style.display = "none";
  resetButton.style.display = "none";

  // Event listener for translateTextButton
  translateTextButton.addEventListener("click", () => {
    // Hide morse input and label
    morseFormMorse.style.display = "none";
    // Show output and reset button
    output.style.display = "block";
    resetButton.style.display = "block";

    inputTexts();
  });

  // Event listener for translateMorseCodeButton
  translateMorseCodeButton.addEventListener("click", () => {
    // Hide text input and label
    morseFormText.style.display = "none";
    // Show output and reset button
    output.style.display = "block";
    resetButton.style.display = "block";

    inputMorseCode();
  });

  // Event listener for input on text input field
textInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const validCharacters = /^[a-zA-Z0-9\.\?\!\;\:\+\-\/\= ]*$/;

  // Validate each character
  const filteredValue = inputValue.split("").filter(char => validCharacters.test(char)).join("");

  // Update the text input value
  event.target.value = filteredValue;
});

// Event listener for input on morse input field
morseInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const validCharacters = /^[.\-\s/]*$/; // Valid characters: ".", "-", "/", and whitespace

  // Validate each character
  const filteredValue = inputValue.split("").filter(char => validCharacters.test(char)).join("");

  // Update the morse input value
  event.target.value = filteredValue;
});

  // Event listener for the reset button
  resetButton.addEventListener("click", () => {
    // Show text input and label, hide morse input and label
    morseFormText.style.display = "flex";
    morseFormMorse.style.display = "flex";
    // Hide output and reset button
    output.style.display = "none";
    resetButton.style.display = "none";
    // Clear the text input
    textInput.value = "";
    // Clear the morse input
    morseInput.value = "";
    // Clear the output
    output.textContent = "";
  });
});
