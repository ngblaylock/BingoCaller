var B = [],
    I = [],
    N = [],
    G = [],
    O = [];
var numbers = [];
var timerStart = $('#timer-count').val();
var clearTimer = false;

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function clearTime() {
    $('.timer-display').text("");
    clearTimer = true;
    $('#timer-stop, #timer').toggleClass('d-none');
}

function startTimer(n) {
    console.log(n)
    if (clearTimer) {
        return;
    } else if (n <= 0) {
        callNumber()
        startTimer(timerStart);
    } else {
        $('.timer-display').text(n);
        setTimeout(function () {
            startTimer(n - 1);
        }, 1000);
    }
}

function generateNumber() {
    if (numbers.length > 0) {
        var fullNumber = fullNum(numbers[0]);
        document.getElementById("input").innerHTML = fullNumber;
        numbers.shift();
    } else {
        document.getElementById("input").innerHTML = "Blackout";
    }
}

function display(x, y, z) {
    $('#input').html(x.toUpperCase() + " " + y);
    z.push(y);
    z.sort(function (a, b) {
        return a - b
    });
    z = z.join(" <span>•</span> ")
    $("#" + x).html(z);
}

function callNumber() {
    // 1. get in the numbers array
    var numToCall = numbers.pop();
    if (numToCall > 0 && numToCall <= 15) {
        display("b", numToCall, B)
    } else if (numToCall > 15 && numToCall <= 30) {
        display("i", numToCall, I)
    } else if (numToCall > 30 && numToCall <= 45) {
        display("n", numToCall, N)
    } else if (numToCall > 45 && numToCall <= 60) {
        display("g", numToCall, G)
    } else if (numToCall > 60 && numToCall <= 75) {
        display("o", numToCall, O)
    } else if (typeof numToCall === 'undefined') {
        $('#input').html('Blackout!');
        $('body').addClass('blackout');
        $('#call').text('Game Over').addClass('disabled');
        clearTime();
    } else {
        alert(numToCall + "There is an error with this program. Let me know at me@nathanblaylock.com")
    }
}

function newGame() {
    $('#input').html('Start!');
    $('body').removeClass('blackout');
    $('#call').text('Call').removeClass('disabled');
    timerStart = $('#timer-count').val();
    $('#input').html("Start");
    $('#b').html("");
    $('#i').html("");
    $('#n').html("");
    $('#g').html("");
    $('#o').html("");
    B = [], I = [], N = [], G = [], O = [];
    numbers = [];
    for (i = 0; i < 75; i++) {
        numbers.push(i + 1);
    }
    numbers = shuffle(numbers);
}

$('#call').click(function () {
    callNumber()
});

$('#timer').click(function () {
    $('#timer-stop, #timer').toggleClass('d-none');
    clearTimer = false;
    callNumber();
    startTimer(timerStart);
});

$('#timer-stop').click(function () {
    clearTime();
});

$(document).ready(function () {
    newGame();
});