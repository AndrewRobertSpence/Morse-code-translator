document.addEventListener('DOMContentLoaded', function() {
// identify all DOM elements
const textInput = document.querySelector("#morse__textInput");
const translateButton = document.querySelector("#morse__translateButton");
const resetButton = document.querySelector("#morse__resetButton");
const output = document.querySelector("#morse__output");

// add EventListener to Function input morse code or text
translateButton.addEventListener("click", inputMorseCodeOrText);
function inputMorseCodeOrText(event) {
  // prevent form from submitting
  event.preventDefault();
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

// Function translate text to morse code

function translateText(text) {
  // create an empty string to store the translated morse code
  let translatedMorseCode = "";
  // loop through the text
  for (let i = 0; i < text.length; i++) {
    // if the text is a space
    if (text[i] === " ") {
      // add a space to the translated morse code
      translatedMorseCode += " ";
    } else {
      // add the corresponding morse code to the translated morse code
      translatedMorseCode += alphabetMorseCodeNumber[text[i].toLowerCase()];
    }
  }
  return translatedMorseCode;
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

});
