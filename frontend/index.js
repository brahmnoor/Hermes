
toCreateArea = []
for(var box=0; box < Sample.polynomials.length; box++){

  //console.log(Sample.polynomials[box]);
  //console.log(Sample.polynomials[0].vertices.length);
  eachCorner = []
  for (var vertex=0; vertex < Sample.polynomials[0].vertices.length; vertex++){
    //This for loop is for going over a particular box and adding its x and y coordinates to eachCorner waali array
    //console.log(Sample.polynomials[box].vertices[vertex]);
    eachCorner.push(Sample.polynomials[box].vertices[vertex].x);
    eachCorner.push(Sample.polynomials[box].vertices[vertex].y);
    
  }
  toCreateArea.push(eachCorner);
}

console.log(toCreateArea);
var theMapTag = document.getElementById('mapID');//You wanna be adding the boxes you create below into this waali ID
for (var i=0; i < toCreateArea.length; i++){
  var insaan = document.createElement("area");
  insaan.coords = toCreateArea[i];
  insaan.id = "notAllowed";
  insaan.shape = "poly";
  insaan.alt = "HTML Tutorial";
  insaan.href = "";
  theMapTag.appendChild(insaan);
}



function printMousePos(event) {
  validClickCoords = []
  validClickCoords.push(event.clientX);
  validClickCoords.push(event.clientY);
  //console.log(event.clientX);
  //console.log(event.clientY);
}



var specifiedElement = document.getElementById('notAllowed');
//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);
  if (isClickInside) {
    //alert('You clicked inside A')
  } else {
    alert('You clicked outside A')
    printMousePos(event);
    console.log(validClickCoords);
  }
});




