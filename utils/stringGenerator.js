import shuffleToString from './shuffleToString';

export default function stringGenerator(numOfLowercase, numofUppercase, numofNumbers, numofSpecial) {
    var generatedChars = [];

    const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '\\', '|', '[', ']', '{', '}', ';', ':', '/', '?', '.', '>', '<', ',', '', '~']

    for (let i = 0; i < numOfLowercase; i++) {
        var randomLower = lowerCaseLetters[Math.floor(Math.random(0,lowerCaseLetters.length) * lowerCaseLetters.length)];
        generatedChars.push(randomLower);
    }

    for (let i = 0; i < numofUppercase; i++) {
        var randomUpper = upperCaseLetters[Math.floor(Math.random(0,upperCaseLetters.length) * upperCaseLetters.length)];
        generatedChars.push(randomUpper);
    }

    for (let i = 0; i < numofNumbers; i++) {
        var randomNumber = numbers[Math.floor(Math.random(0,numbers.length) * numbers.length)];
        generatedChars.push(randomNumber);
    }

    for (let i = 0; i < numofSpecial; i++) {
        var randomSpecial = specialCharacters[Math.floor(Math.random(0,specialCharacters.length) * specialCharacters.length)];
        generatedChars.push(randomSpecial);
    }

    var generatedString = shuffleToString(generatedChars);

    return generatedString;    

} 