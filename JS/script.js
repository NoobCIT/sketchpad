//Prompt user for input
function askUser() {
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
  var numSides = prompt("Please specify number of boxes per side.");
  if (isNaN(numSides) || numSides == 0) {
    numSides = prompt("Please enter a number greater than 0.");
  }
  else if ( numSides == null) {
    createGrid(16);
  }
  else {
    createGrid(numSides);
  }
}

//Create Grid
createGrid(16);
function createGrid(numSides) {
  var squareH = 384/numSides;
  var squareW = 384/numSides;
//Create Rows
  var gridRow = [];
  for (var j = 0; j < numSides; j++) {
    divRow = document.getElementById("content");
    gridRow[j] = document.createElement("div");
    gridRow[j].id = "grid" + j;
    gridRow[j].className = "rows";
    divRow.appendChild(gridRow[j]);
  }
//Create Columns
  for (var k = 0; k < numSides; k++ ) {
    gridDivs = document.getElementById("grid" + k);
    var mySquares = [];
    for (var i = 0; i < numSides; i++) {
      mySquares[i] = document.createElement("div");
      mySquares[i].style.backgroundColor = "white";
      mySquares[i].id = "block" + i;
      mySquares[i].style.display = "inline-block";
      mySquares[i].style.width = squareH + "px";
      mySquares[i].style.height = squareW + "px";
      mySquares[i].style.border = "thin solid gray"
      mySquares[i].className = "squares";
      gridDivs.appendChild(mySquares[i]);
    }
  }
  $(document).ready(function() {
    $('.squares').hover(function() {
      var color = "rgb" + "(" + Math.floor((Math.random() * 255) + 1) + ","
                  + Math.floor((Math.random() * 255) + 1) + ","
                  + Math.floor((Math.random() * 255) + 1) + ")";
      $(this).css("background-color", color);
//      var opac = + $(this).css('opacity');
//        if (opac != 1.0) {
//          opac += 0.10;
//          $(this).css({"opacity": opac});
//        }
    });
  });
}
