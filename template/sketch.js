// 1. Create the button
let button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});

/* Read 

https://css-tricks.com/use-button-element/
*/
