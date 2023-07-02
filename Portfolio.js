/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("Links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

document.getElementById("target-me").open = true;

const details = document.querySelector("details");
details.setAttribute("open", "");

/*id="target-me"*/