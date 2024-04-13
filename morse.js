document.addEventListener("DOMContentLoaded", function () {
  // // identify all DOM elements
  const textInput = document.querySelector("#morse__textInput");
  const morseInput = document.querySelector("#morse__morseInput");
  const translateTextButton = document.querySelector("#text__translateButton");
  const translateMorseCodeButton = document.querySelector(
    "#morse__translateButton"
  );
  const resetButton = document.querySelector("#morseText__resetButton");
  const output = document.querySelector("#morse__output");

  // add function to swap the key value pairs over for morse to english translation (Chike assisted with this)
  function swapMorseCode() {
    return Object.fromEntries(
      Object.entries(alphabetMorseCodeNumber).map(([key, value]) => [
        value,
        key,
      ])
    );
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
        translatedMorseCode += alphabetMorseCodeNumber[text[i].toLowerCase()] + " ";
      }
    }
    return translatedMorseCode.trim();
  }

  // Function translate morse code to text
  function translateMorseCode(morseCode) {
    // split the morse code into an array
    let morseCodeArr = morseCode.split(" ");
    console.log("morse code: ", morseCode);
    let translatedText = "";
    // call the function that swaps morse code
    let swappedMorseCode = swapMorseCode();
    console.log("swapped morse code for translation: ", swappedMorseCode);
    // loop through the morse code
    for (let i = 0; i < morseCodeArr.length; i++) {
      // if the morse is a space
      if (morseCodeArr[i] === " ") {
        // add a space to the translated text
        translatedText += " ";
      } else {
        // add the corresponding text to the translated text
        translatedText += swappedMorseCode[morseCodeArr[i]];
      }
    }
    console.log("Translated Text:", translatedText);
    return translatedText;
  }

     console.log(translateMorseCode(".- .-. ."))

  // Split the input function into input Morse code and input English text
  // add EventListener to Function input text
  translateTextButton.addEventListener("click", function () {
    // clear the morse input
    morseInput.value = "";
    // clear the output
    output.textContent = "";
    // get the value of the text input
    const inputTexts = textInput.value;
    output.textContent = translateText(inputTexts);
  });

  // add EventListener to Function input morse code
  translateMorseCodeButton.addEventListener("click", function () {
    // clear the text input
    textInput.value = "";
    // clear the output
    output.textContent = "";
    // get the value of the morse code input
    const inputMorse = morseInput.value;
    console.log("input morse: ", inputMorse)
    output.textContent = translateMorseCode(inputMorse);
  });

  // Event listener for the reset button
  resetButton.addEventListener("click", () => {
    // clear the text input
    textInput.value = "";
    // clear the morse input
    morseInput.value = "";
    // clear the output
    output.textContent = "";
  });
});
