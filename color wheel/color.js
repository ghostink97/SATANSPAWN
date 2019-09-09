let colorPicker = document.querySelector("#colorPicker");
let square = document.querySelector(".display");

colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", displayColor);
colorPicker.select();

function displayColor(event) {
  square.style.backgroundColor = event.target.value;
}
