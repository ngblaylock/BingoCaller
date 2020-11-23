function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

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

let numbers;
let bingo = [];

function generateCard() {
  $('.active').each(function(){
    $(this).removeClass('active');
  })
  numbers = function () {
    var nums = [];
    for (var n = 1; n <= 75; n++) {
      nums.push(n);
    }
    return nums;
  };
  bingo = [
    shuffle(numbers().splice(0, 15)),
    shuffle(numbers().splice(15, 15)),
    shuffle(numbers().splice(30, 15)),
    shuffle(numbers().splice(45, 15)),
    shuffle(numbers().splice(60, 15)),
  ];
  var column = ["b", "i", "n", "g", "o"];
  for (let c = 0; c < column.length; c++) {
    for (let r = 1; r <= column.length; r++) {
      var cls = "." + column[c] + r;
      $(cls).html(bingo[c].pop());
    }
  }
  $(".free").html("FREE");
}

$(document).ready(function () {
  generateCard();
});

$(".generate").click(generateCard);

$('.bingo-card td').click(function(){
  $(this).children().toggleClass('active')
})