function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue, randomIndex;
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

function fullNum(num) {
    var separator = ' <span>•</span> ';
    if (num > 0 && num < 16) {
        B.push(num);
        B.sort(function (a, b) {
            return a - b
        });
        $('#b').html(B.join(separator));
        return ("B " + num);
    }
    else if (num > 15 && num < 31) {
        I.push(num);
        I.sort(function (a, b) {
            return a - b
        });
        $('#i').html(B.join(separator));
        return ("I " + num);
    }
    else if (num > 30 && num < 46) {
        N.push(num);
        N.sort(function (a, b) {
            return a - b
        });
        $('#n').html(B.join(separator));
        return ("N " + num);
    }
    else if (num > 45 && num < 61) {
        G.push(num);
        G.sort(function (a, b) {
            return a - b
        });
        $('#g').html(B.join(separator));
        return ("G " + num);
    }
    else if (num > 60 && num < 76) {
        O.push(num);
        O.sort(function (a, b) {
            return a - b
        });
        $('#o').html(B.join(separator));
        return ("O " + num);
    }
    else {
        return ("Not a number");
    }
}

function generateNumber() {
    if (numbers.length > 0) {
        var fullNumber = fullNum(numbers[0]);
        document.getElementById("input").innerHTML = fullNumber;
        numbers.shift();
    }
    else {
        document.getElementById("input").innerHTML = "Blackout";
    }
}

function display(x, y, z){
    $('#input').html(x.toUpperCase() + " " + y);
    console.log(z);
    z.push(y);
    console.log(x);
    z.sort(function (a, b) {
        return a - b
    });
    z = z.join(" <span>•</span> ")
    $("#" + x).html(z);
}

function callNumber(){
    // 1. get in the numbers array
    var numToCall = numbers.pop();
    if(numToCall > 0 && numToCall <= 15){
        display("b", numToCall, B)
    }else if(numToCall > 15 && numToCall <= 30){
        display("i", numToCall, I)
    }else if(numToCall > 30 && numToCall <= 45){
        display("n", numToCall, N)
    }else if(numToCall > 45 && numToCall <= 60){
        display("g", numToCall, G)
    }else if(numToCall > 60 && numToCall <= 75){
        display("o", numToCall, O)
    }else if(typeof numToCall === 'undefined'){
        $('#input').html('Blackout!');
        $('body').addClass('blackout');
    }else{
        alert(numToCall + "There is an error with this program. Let me know at me@nathanblaylock.com")
    }
}

function newGame() {
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

$('#call').click(function(){
    callNumber()
});
$('.newGame').click(function(){
    newGame()
});

$(document).ready(function(){   
    var B = [], I = [], N = [], G = [], O = [];
    var numbers = [];
    newGame();
});