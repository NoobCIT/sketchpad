//Prompt user for input
function askUser() {
  var numSides = prompt("Please specify number of boxes per side.");
  if (isNaN(numSides) == true) {
    numSides = prompt("Please enter a number.");
  }
}

//Create Grid
function createGrid() {

//Create Rows
  var gridRow = [];
  var numRows = 16;
  for (var j = 0; j < numRows; j++) {
    divRow = document.getElementById("content");
    gridRow[j] = document.createElement("div");
    gridRow[j].id = "grid" + j;
    gridRow[j].className = "rows";
    divRow.appendChild(gridRow[j]);
  }

//Create Columns
  for (var k = 0; k < numRows; k++ ) {
    gridDivs = document.getElementById("grid" + k);
    var mySquares = [];
    var numSquares = 16;
    for (var i = 0; i < numSquares; i++) {
      mySquares[i] = document.createElement("div");
      mySquares[i].style.backgroundColor = "green";
      mySquares[i].id = "block" + i;
      mySquares[i].style.display = "inline-block";
      mySquares[i].style.width = "16px";
      mySquares[i].style.height = "16px";
      mySquares[i].style.border = "thin solid black"
      gridDivs.appendChild(mySquares[i]);
    }
  }
}

createGrid();

//$(document).ready(function() {
//  $('button').click(function() {
//    $(this).prompt('Whats up');
//  })
//});
