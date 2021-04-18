
var specifiedElement = document.getElementById('notAllowed');

console.log(testJSON.name);

//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);
  if (isClickInside) {
    alert('You clicked inside A')
  } else {
    alert('You clicked outside A')
  }
});

