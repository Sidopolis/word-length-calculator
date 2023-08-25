var wordLengthcalculator = document.getElementById("word-length-calculator");
var wordInput = document.getElementById("word");
var wordLengthOutput = document.getElementById("word-length");

function calculateWordLength(){
    var word = wordInput.value;
    var wordLength = word.split("").length;

    wordLengthOutput.innerHTML = wordLength;
}

wordInput.addEventListener("input", calculateWordLength);