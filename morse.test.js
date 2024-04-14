// morse.test.js
import {
  translateText,
  translateMorseCode,
  swapMorseCode,
  inputTexts,
  isValidCharacter,
  inputMorseCode,
} from "./morse.js";

// tests for translate text to morse code

describe("translateText", () => {
  // test texts and numbers and characters to morse code
  it("should translate texts and numbers and characters to morse code", () => {
    const result = translateText("Abc123.+-");
    expect(result).toBe(".- -... -.-. .---- ..--- ...-- .-.-.- .-.-. -....-");
  });
  // test when you have more than one word a slash should appear between words
  it("should translate multiple words to morse code with a slash between words", () => {
    const result = translateText("Hello world");
    expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });
});

// tests for translate morse code to text

describe("translateMorseCode", () => {
  // test morse code to texts and numbers and characters
  it("should translate morse code to texts and numbers and characters", () => {
    const result = translateMorseCode(
      ".- -... -.-. .---- ..--- ...-- .-.-.- .-.-. -....-"
    );
    expect(result).toBe("Abc123.+-");
  });
  // test when you have a slash in the morse code it should be replaced with a space
  it("should translate a slash in the morse code to a space", () => {
    const result = translateMorseCode(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(result).toBe("Hello world");
  });
  // test that at the beginning of each sentence the initial letter is a capital letter
  it("should capitalize the first letter of each sentence", () => {
    const result = translateMorseCode(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. .-.-.- / .... --- .-- / .- .-. . / -.-- --- ..- ..--.."
    );
    expect(result).toBe("Hello world. How are you?");
  });
});

// tests for swap morse code

describe("swapMorseCode", () => {
  // test that the key value pairs are swapped
  it("should swap the key value pairs", () => {
    const result = swapMorseCode();
    expect(result).toEqual({
      ".-": "a",
      "-...": "b",
      "-.-.": "c",
      "-..": "d",
      ".": "e",
      "..-.": "f",
      "--.": "g",
      "....": "h",
      "..": "i",
      ".---": "j",
      "-.-": "k",
      ".-..": "l",
      "--": "m",
      "-.": "n",
      "---": "o",
      ".--.": "p",
      "--.-": "q",
      ".-.": "r",
      "...": "s",
      "-": "t",
      "..-": "u",
      "...-": "v",
      ".--": "w",
      "-..-": "x",
      "-.--": "y",
      "--..": "z",
      "-----": "0",
      ".----": "1",
      "..---": "2",
      "...--": "3",
      "....-": "4",
      ".....": "5",
      "-....": "6",
      "--...": "7",
      "---..": "8",
      "----.": "9",
      "..--..": "?",
      "-.-.--": "!",
      ".-.-.-": ".",
      "-.-.-.": ";",
      "---...": ":",
      ".-.-.": "+",
      "-....-": "-",
      " ": "/",
      "-...-": "=",
    });
  });
});

// test for input texts and numbers and characters to morse code

// describe("inputTexts", () => {
//   // test texts and numbers and characters from only the alphabetMorseCodeNumber object can be entered into the input field
//   it(
//   })
// })

describe("isValidCharacter", () => {
    // test that only the alphabetMorseCodeNumber object can be entered into the input field
    it("should only accept the alphabetMorseCodeNumber object keys", () => {
        const result = isValidCharacter("%$#^&");
        expect(result).toBe(false);
})
})