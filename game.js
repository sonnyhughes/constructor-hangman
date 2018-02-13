//SECRET WORD IS RANDOMLY SELECTED AND EXPORTED
var secretWords = ["MERCURY", "VENUS", "EARTH", "MOON", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE", "EUROPA", "IO", "GANYMEDE", "CALLISTO"];

var randomWord = secretWords[Math.floor(Math.random() * secretWords.length)];

exports.randomWord = randomWord;