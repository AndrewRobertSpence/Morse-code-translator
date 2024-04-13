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
    "/": "-..-.",
    "=": "-...-",
  };

  const swapMorseCode = () => {
    return Object.fromEntries(Object.entries(alphabetMorseCodeNumber).map(([key, value])=>[value, key]));
  }



  // Function translate morse code to text
const translateMorseCode = (morseCode) => {
    // split the morse code into an array
   let morseCodeArr = morseCode.split(" ")
   console.log("morse code: ", morseCode)
   let translatedText = ""
   // call the function that swaps morse code
  let swappedMorseCode = swapMorseCode(alphabetMorseCodeNumber)
   console.log("swap morse code: ", swappedMorseCode)
    // loop through the text
   for (let i = 0; i < morseCodeArr.length; i++) {
     // if the text is a space
     if (morseCodeArr[i] === " ") {
       // add a space to the translated morse code
       translatedText += " ";
     } else {
       // add the corresponding morse code to the translated morse code
       translatedText += swappedMorseCode[morseCodeArr[i]];
     }
   }
   return translatedText;
 }

 const inputMorseCodeOrText = () => {
    // get the value of the text input
    const inputText = textInput.value;
    // check if the input is morse code or text
    // if (inputText.match(/^[\.|\- ]+$/)) {
    //    // morse code
       output.textContent = translateMorseCode(inputText);
    // } else {
    //    // text
    //    output.textContent = translateText(inputText);
    // }
   }

   

 const morseCode = ".... . .-.. .-.. ---";
 const translatedText = translateMorseCode(morseCode);
 console.log("Translated text: ", translatedText);
 




