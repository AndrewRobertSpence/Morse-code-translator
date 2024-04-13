// morse.test.js
import { translateText, translateMorseCode, swapMorseCode} from "./morse.js";

// positive and negative tests for morse code translator

// tests for translate text to morse code

describe ("translateText", () => {
    // test texts and numbers and characters to morse code
    it ("should translate texts and numbers and characters to morse code", () => {
        const result = translateText("abc123.+-");
        expect(result).toBe(".- -... -.-. .---- ..--- ...-- .-.-.- .-.-. -....-");
    })
    // test when you have more than one word that the space is represented in morse code
    it ("should translate multiple words to morse code", () => {
        const result = translateText("hello world");
        expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    })

})


// tests for translate morse code to text

// test all morse code to texts and numbers and characters

// test that when nothing is in the input field that an alert is shown

// tests for swap morse code

// tests for translate button for text

// tests for translate button for morse code

// tests for reset

