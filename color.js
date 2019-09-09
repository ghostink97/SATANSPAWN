let colorPicker = document.querySelector("#colorPicker");
let square = document.querySelector(".square");
let hex = document.querySelector("#hex");

colorPicker.addEventListener("input", displayColor);

colorPicker.select();

function displayColor(event) {
  square.style.backgroundColor = event.target.value;
  hex.textContent = event.target.value;
}
