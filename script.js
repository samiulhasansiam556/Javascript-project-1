<<<<<<< HEAD


var score = document.getElementById('score');
var text = document.getElementById('text');
var y = document.getElementById('input');
var ok = document.getElementById('ok');

var t = 5; // total chances
var c = 0; // current chance
var w = 0; // correct guesses

ok.addEventListener("click", function() {
    var x = parseInt(Math.floor(Math.random() * 6)); // Generating a random number between 1 and 5
 
    if (x == y.value) {
        text.innerHTML = "You Win!! Now You Have " + --t + " chances";
        w++;
    } else {
        text.innerHTML = "Bad Luck!! Now You Have " + --t + " chances";
    }

    c++;

    if (c == 5) {
        text.innerHTML = "Your score is " + w + "/5";
        score.innerHTML = "Game Over!";
        // Disable the input and button after 5 chances
        y.disabled = true;
        ok.disabled = true;
    }
});
=======


var score = document.getElementById('score');
var text = document.getElementById('text');
var y = document.getElementById('input');
var ok = document.getElementById('ok');

var t = 5; // total chances
var c = 0; // current chance
var w = 0; // correct guesses

ok.addEventListener("click", function() {
    var x = parseInt(Math.floor(Math.random() * 6)); // Generating a random number between 1 and 5
 
    if (x == y.value) {
        text.innerHTML = "You Win!! Now You Have " + --t + " chances";
        w++;
    } else {
        text.innerHTML = "Bad Luck!! Now You Have " + --t + " chances";
    }

    c++;

    if (c == 5) {
        text.innerHTML = "Your score is " + w + "/5";
        score.innerHTML = "Game Over!";
        // Disable the input and button after 5 chances
        y.disabled = true;
        ok.disabled = true;
    }
});
>>>>>>> 663965c608fa6c8ca5cf9a6513153baf9e3cbaad
