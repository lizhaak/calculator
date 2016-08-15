$(document).ready(function () {

addData();

$('.zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine').on('click', captureNumber);
$('.clear').on('click', clearAll);
$('.addition').on('click', addition);
$('.subtraction').on('click', subtraction);
$('.division').on('click', division);
$('.multiplication').on('click', multiplication);
$('.equal').on('click', equal);

});

var mathObject = {
  x: "",
  y: "",
  type: ""
};
var stringOfNumbersX = "";
var stringOfNumbersY = "";


function clearAll() {
  mathObject.x = "";
  mathObject.y = "";
  mathObject.type = "";

  stringOfNumbersX = "";
  stringOfNumbersY = "";
  $('#displayNumber').text(0);
}

function captureNumber() {
  var clickedNumber = $(this).data("number");
  console.log('clickedNumber', clickedNumber);


  if(mathObject.x === "" || mathObject.type === "") {
    stringOfNumbersX += clickedNumber;
    if(stringOfNumbersX.length <= 12) {
      mathObject.x = Number(stringOfNumbersX);
      console.log('mathObject', mathObject);

      $('#displayNumber').text(stringOfNumbersX);
    }
  } else if(mathObject.x !== "") {
      stringOfNumbersY += clickedNumber;
      if(stringOfNumbersY.length <= 12) {
        mathObject.y = Number(stringOfNumbersY);
        console.log('mathObject', mathObject);

        $('#displayNumber').text(stringOfNumbersY);
      }
  }
}

function addition() {
  mathObject.type = 'adds';
  $('#displayNumber').text(0);
  stringOfNumbersX = "";
}

function subtraction() {
  mathObject.type = 'subtracts';
  $('#displayNumber').text(0);
  stringOfNumbersX = "";
}

function division() {
  mathObject.type = 'divides';
  $('#displayNumber').text(0);
  stringOfNumbersX = "";
}

function multiplication() {
  mathObject.type = 'multiplys';
  $('#displayNumber').text(0);
  stringOfNumbersX = "";
}

function equal() {
  var url = '/' + mathObject.type;
  console.log('url', url);
  $.ajax({
    type: 'POST',
    url: url,
    data: mathObject,
    success: function(totaledNumber) {
      console.log('post request successful!');
      totaledNumber = Number(totaledNumber);
      if(totaledNumber === parseInt(totaledNumber)) {
        totaledNumber = parseInt(totaledNumber);
      } else {
        totaledNumber = Number(totaledNumber).toFixed(8);
      }

      $('#displayNumber').text(totaledNumber);
    },
    error: function() {
      console.log('post failed');
      alert("hey, it didn't work!");
    }
  });
  mathObject.x = "";
  mathObject.y = "";
  mathObject.type = "";

  stringOfNumbersX = "";
  stringOfNumbersY = "";
}

function addData(){
  $('.zero').data('number', 0);
  $('.one').data('number', 1);
  $('.two').data('number', 2);
  $('.three').data('number', 3);
  $('.four').data('number', 4);
  $('.five').data('number', 5);
  $('.six').data('number', 6);
  $('.seven').data('number', 7);
  $('.eight').data('number', 8);
  $('.nine').data('number', 9);
}
