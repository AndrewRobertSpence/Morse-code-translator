document.addEventListener('DOMContentLoaded', function() {
// // identify all DOM elements
const textInput = document.querySelector("#morse__textInput");
const translateMorseCodeButton = document.querySelector("#morse__translateButton");
const resetButton = document.querySelector("#morse__resetButton");
const output = document.querySelector("#morse__output");

// add function to swap the key value pairs over for morse to english translation (Chike assisted with this)
const swapMorseCode = () => {
  return Object.fromEntries(Object.entries(alphabetMorseCodeNumber).map(([key, value])=>[value, key]));
}

// Function translate text to morse code
const translateText = (text) => {
  // create an empty string to store the translated morse code
  let translatedMorseCode = "";
  // loop through the text
  for (let i = 0; i < text.length; i++) {
    // // if the text is a space
    // if (text[i] === " ") {
    //   // add a space to the translated morse code
    //   translatedMorseCode += " ";
    // } else {
      // add the corresponding morse code to the translated morse code
      translatedMorseCode += alphabetMorseCodeNumber[text[i].toLowerCase()];
    }
  }
  return translatedMorseCode;
}

// Split the input function into input Morse code and input English text
const inputText = () => {
  // get the value of the text input
  const inputTexts = textInput.value;
     output.textContent = translateText(inputTexts);
 }
// add EventListener to Function input text
translateTextButton.addEventListener("click", inputText);

// Function translate morse code to text
const translateMorseCode = (morseCode) => {
   // split the morse code into an array
  let morseCodeArr = morseCode.split(" ")
  console.log("morse code: ", morseCode)
  let translatedText = ""
  // call the function that swaps morse code
 let swappedMorseCode = swapMorseCode()
  console.log("swap morse code: ", swappedMorseCode)
   // loop through the text
  for (let i = 0; i < morseCodeArr.length; i++) {
    // // if the text is a space
    // if (morseCodeArr[i] === " ") {
    //   // add a space to the translated morse code
    //   translatedText += " ";
    // } else {
      // add the corresponding morse code to the translated morse code
      translatedText += swappedMorseCode[morseCodeArr[i]];
    }
  }
  return translatedText;
}

// Split the input function into input Morse code and input English text
const inputMorseCode = () => {
  // get the value of the text input
  const inputText = textInput.value;
     output.textContent = translateMorseCode(inputText);
 }
 
// add EventListener to Function input morse code
translateMorseCodeButton.addEventListener("click", inputMorseCode);

// Call the function to run the program
inputMorseCode();
//  console.log(translateMorseCode1(".- .-. ."))
// Event listener for the reset button
resetButton.addEventListener("click", () => {
  // clear the text input
  textInput.value = "";
  // clear the output
  output.textContent = "";
});


})



