document.addEventListener('DOMContentLoaded', function() {
// identify all DOM elements
const textInput = document.querySelector("#morse__textInput");
const translateButton = document.querySelector("#morse__translateButton");
const resetButton = document.querySelector("#morse__resetButton");
const output = document.querySelector("#morse__output");

const inputMorseCodeOrText = () => {
  // get the value of the text input
  const inputText = textInput.value;
  // check if the input is morse code or text
  if (inputText.match(/^[\.|\-]+$/)) {
    // morse code
    output.textContent = translateMorseCode(inputText);
  } else {
    // text
    output.textContent = translateText(inputText);
  }
}

// add EventListener to Function input morse code or text
translateButton.addEventListener("click", inputMorseCodeOrText);

// Function translate text to morse code
const translateText = (text) => {
  // create an empty string to store the translated morse code
  let translatedMorseCode = "";
  // loop through the text
  for (let i = 0; i < text.length; i++) {
    // if the text is a space
    if (text[i] === "") {
      // add a space to the translated morse code
      translatedMorseCode += " ";
    } else {
      // add the corresponding morse code to the translated morse code
      translatedMorseCode += alphabetMorseCodeNumber[text[i].toLowerCase()];
    }
  }
  return translatedMorseCode;
}

// Function translate morse code to text
const translateMorseCode = (morseCode) => {
  // split the morse code into an array
  const morseCodeArray = morseCode.split("   ");
  // create an empty string to store the translated text
  console.log("This is the morse code array: ", morseCodeArray)
  let translatedText = "";
  // loop through the morse code array
  for (let i = 0; i < morseCodeArray.length; i++) {
    // if the morse code is a space
    if (morseCodeArray[i] === "") {
      // add a space to the translated text
      translatedText += " ";
    } else {
    // Use the MorseCodeAlphabetNumber object to find the corresponding letter
    let translatedText = morseCodeArray.map(function (word) {
      word.split(" ").map(function (letter) {
        translatedText.push(morseCodeAlphabetNumber[letter])
      })
      translatedText.push(" ").join("")
    })
    return translatedText;
    }
  }
}

// Event listener for the reset button
resetButton.addEventListener("click", () => {
  // clear the text input
  textInput.value = "";
  // clear the output
  output.textContent = "";
});

// Call the function to run the program
inputMorseCodeOrText();

})

