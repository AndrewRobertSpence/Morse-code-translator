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


});
