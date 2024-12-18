let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.background = e.target.id;
    }
  });
});