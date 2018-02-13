var game = require("./game.js");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");
var inquirer = require("inquirer");

var myWord = new wordConstructor.wordConstructor(game.randomWord);
var randomWord = game.randomWord;
var letterGuessed;
var totalGuesses = 15;

exports.letter;

function takeAGuess() {

    console.log(myWord.toString());

    if (myWord.guessesMade.length >= totalGuesses) {
        console.log(`VAPORIZED!`);
        return; //GAME OVER
    }

    inquirer.prompt([{
            name: 'letter',
            type: 'text',
            message: 'Guess a letter:',
            validate: function (str) {
                var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                return regEx.test(str); //FORM VALIDATION
            }
        }]).then(function (letterInput) {
            var letter = letterInput.letter;
            myWord.findLetter(letter);
            if (myWord.isComplete()) {
                console.log(`Correct! The Secred Word was ${myWord.toString()}!`);
                return; //WINNER WINNER
            }
            //IF YOU HAVEN'T WON, THEN TAKE ANOTHER GUESS
            console.log('-------------------\n');
            console.log(`You only have ${(totalGuesses - myWord.guessesMade.length)} guesses left.`)
            takeAGuess();
        });
}

//START GAME
takeAGuess();