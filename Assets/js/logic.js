// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

// Set default mode to dark
let mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    //here it's updating our dom...
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    //dark is a class btw on the html
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
