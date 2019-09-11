let colorPicker = document.querySelector("#colorPicker");
let square = document.querySelector(".square");
let hex = document.querySelector("#hex");
let rgb = document.querySelector("#rgb");
let hsl = document.querySelector("#hsl");
colorPicker.addEventListener("input", selectColor);

function selectColor(event) {
  const color = event.target.value;
  console.log(color);
  convertColors(color);
  displayColor(color);
  //convertRGBtoHSl(color);
}

function displayColor(color) {
  square.style.backgroundColor = color;
  hex.textContent = "Hex:" + color;
}

function convertColors(color) {
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);
  let value = `RGB( ${r}, ${g}, ${b})`;
  //let RGB = { r, g, b };
  console.log(value);
  rgb.textContent = value;
}

/*
function convertRGBtoHSl(color) {
  let r = convertColors(color).r / 255;
  let g = convertColors(color).g / 255;
  let b = convertColors(color).b / 255;

  //  r /= 255;
  //  g /= 255;
  //  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //console.log("hsl(%f,%f%,%f%)", h, s, l);
  // just for testing
  let valueHSL = `HSL( ${Math.round(h)}°, ${Math.round(s)}%, ${Math.round(
    l
  )}%)`;
  console.log(valueHSL);
  displayHSL();
  function displayHSL() {
    hsl.textContent = valueHSL;
  }
}
*/

function convertColors(color) {
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);
  let value = `RGB( ${r}, ${g}, ${b})`;
  //let RGB = { r, g, b };
  console.log(value);
  rgb.textContent = value;

  convertRGBtoHSl(color);
  function convertRGBtoHSl(color) {
    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
      h = 0;
    } else if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) {
      h = h + 360;
    }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
      s = 0;
    } else {
      s = (max - l) / Math.min(l, 1 - l);
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    //console.log("hsl(%f,%f%,%f%)", h, s, l);
    // just for testing
    let valueHSL = `HSL( ${Math.round(h)}°, ${Math.round(s)}%, ${Math.round(
      l
    )}%)`;
    console.log(valueHSL);
    displayHSL();
    function displayHSL() {
      hsl.textContent = valueHSL;
    }
  }
}
