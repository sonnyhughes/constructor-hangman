//CHECKS USER INPUT AGAINST RANDOM SECRET WORD

var letterConstructor = require("./letter.js");

function word(value) {
    this.value = value;
    this.letters = [];
    this.guessesMade = "";
    for (var i = 0; i < this.value.length; i++) {
        this.letters.push(new letterConstructor.letter(this.value[i]));
    }
};

word.prototype.findLetter = function (letter) {
    var lowerLetter = letter.toLowerCase();
    if (this.guessesMade.indexOf(lowerLetter) != -1) {
        return "Duplicate";
    }
    this.guessesMade += lowerLetter;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].value.toLowerCase() == lowerLetter) {
            this.letters[i].show = true;
        }
    }
};

word.prototype.isComplete = function () {
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].show) return false;
    }
    return true;
}

word.prototype.toString = function () {
    var output = "";
    for (var i = 0; i < this.letters.length; i++) {
        output += this.letters[i].printInfo();
    }
    return output;
}

exports.wordConstructor = word;