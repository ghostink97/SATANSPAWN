"use strict";

let colorPicker = document.querySelector("#colorPicker");
let maincircle = document.querySelector("#squareBase");
let hex = document.querySelector("#hex");
let rgb = document.querySelector("#rgb");
let hsl = document.querySelector("#hsl");
colorPicker.addEventListener("input", selectColor);

function selectColor(event) {
  const color = event.target.value;
  console.log(color);
  convertHextoRGB(color);
  displayColor(color);
  convertRGBtoHSl(color);
}

function displayColor(color) {
  maincircle.style.backgroundColor = color;
  hex.textContent = "Hex:" + color;
}

function convertHextoRGB(color) {
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);
  let value = `RGB( ${r}, ${g}, ${b})`;
  let RGB = { r, g, b };
  console.log(value);
  rgb.textContent = value;
  return RGB;
}

function convertRGBtoHSl(color) {
  let rgb = convertHextoRGB(color);
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;
  r /= 255;
  g /= 255;
  b /= 255;
  return convertRGBtoHSL(r, g, b);
}

function convertRGBtoHSl(color) {
  let rgb = convertHextoRGB(color);
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;
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

  analogousCT();

  function analogousCT() {
    document.querySelector("#basecolor").classList.add("highlight");
    let squarem1 = document.querySelector("#squarem1");
    let cssHSLm1 = `hsl(${Math.round(h - 60)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarem1.style.backgroundColor = cssHSLm1;
    document.querySelector("#hslm1").textContent = cssHSLm1;
    console.log(cssHSLm1);
    let squarem2 = document.querySelector("#squarem2");
    let cssHSLm2 = `hsl(${Math.round(h - 30)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarem2.style.backgroundColor = cssHSLm2;
    document.querySelector("#hslm2").textContent = cssHSLm2;

    let squarep1 = document.querySelector("#squarep1");
    let cssHSLp1 = `hsl(${Math.round(h + 30)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarep1.style.backgroundColor = cssHSLp1;
    document.querySelector("#hslp1").textContent = cssHSLp1;

    let squarep2 = document.querySelector("#squarep2");
    let cssHSLp2 = `hsl(${Math.round(h + 60)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarep2.style.backgroundColor = cssHSLp2;
    document.querySelector("#hslp2").textContent = cssHSLp2;

  }

  monochromaticCT();

  function monochromaticCT() {
    document.querySelector("#basecolor").classList.add("highlight");
    let squarem1 = document.querySelector("#squarem1");
    let cssHSLm1 = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l - 30)}%)`;
    squarem1.style.backgroundColor = cssHSLm1;
    document.querySelector("#hslm1").textContent = cssHSLm1;
    console.log(cssHSLm1);
    let squarem2 = document.querySelector("#squarem2");
    let cssHSLm2 = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l - 15)}%)`;
    squarem2.style.backgroundColor = cssHSLm2;
    document.querySelector("#hslm2").textContent = cssHSLm2;

    let squarep1 = document.querySelector("#squarep1");
    let cssHSLp1 = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l + 15)}%)`;
    squarep1.style.backgroundColor = cssHSLp1;
    document.querySelector("#hslp1").textContent = cssHSLp1;

    let squarep2 = document.querySelector("#squarep2");
    let cssHSLp2 = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l + 30)}%)`;
    squarep2.style.backgroundColor = cssHSLp2;
    document.querySelector("#hslp2").textContent = cssHSLp2;
  }

  shadesCT();

  function shadesCT() {
    document.querySelector("#basecolor").classList.add("highlight");
    let squarem1 = document.querySelector("#squarem1");
    let cssHSLm1 = `hsl(${Math.round(h)}, ${Math.round(s - 60)}%, ${Math.round(l)}%)`;
    squarem1.style.backgroundColor = cssHSLm1;
    document.querySelector("#hslm1").textContent = cssHSLm1;
    console.log(cssHSLm1);
    let squarem2 = document.querySelector("#squarem2");
    let cssHSLm2 = `hsl(${Math.round(h)}, ${Math.round(s - 30)}%, ${Math.round(l)}%)`;
    squarem2.style.backgroundColor = cssHSLm2;
    document.querySelector("#hslm2").textContent = cssHSLm2;

    let squarep1 = document.querySelector("#squarep1");
    let cssHSLp1 = `hsl(${Math.round(h)}, ${Math.round(s + 30)}%, ${Math.round(l)}%)`;
    squarep1.style.backgroundColor = cssHSLp1;
    document.querySelector("#hslp1").textContent = cssHSLp1;

    let squarep2 = document.querySelector("#squarep2");
    let cssHSLp2 = `hsl(${Math.round(h)}, ${Math.round(s + 60)}%, ${Math.round(l)}%)`;
    squarep2.style.backgroundColor = cssHSLp2;
    document.querySelector("#hslp2").textContent = cssHSLp2;
  }

  complimentatyCT();

  function complimentatyCT() {
    document.querySelector("#basecolor").classList.add("highlight");
    let squarem1 = document.querySelector("#squarem1");
    let cssHSLm1 = `hsl(${Math.round(h - 180)}, ${Math.round(s)}%, ${Math.round(l - 15)}%)`;
    squarem1.style.backgroundColor = cssHSLm1;
    document.querySelector("#col2").classList.add("highlight");
    document.querySelector("#hslm1").textContent = cssHSLm1;
    console.log(cssHSLm1);
    let squarem2 = document.querySelector("#squarem2");
    let cssHSLm2 = `hsl(${Math.round(h + 180)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarem2.style.backgroundColor = cssHSLm2;
    document.querySelector("#hslm2").textContent = cssHSLm2;

    let squarep1 = document.querySelector("#squarep1");
    let cssHSLp1 = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l + 15)}%)`;
    squarep1.style.backgroundColor = cssHSLp1;
    document.querySelector("#hslp1").textContent = cssHSLp1;

    let squarep2 = document.querySelector("#squarep2");
    let cssHSLp2 = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l + 30)}%)`;
    squarep2.style.backgroundColor = cssHSLp2;
    document.querySelector("#hslp2").textContent = cssHSLp2;
  }




  compoundCT();

  function compoundCT() {
    document.querySelector("#basecolor").classList.add("highlight");
    let squarem1 = document.querySelector("#squarem1");
    let cssHSLm1 = `hsl(${Math.round(h - 210)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarem1.style.backgroundColor = cssHSLm1;
    document.querySelector("#hslm1").textContent = cssHSLm1;
    console.log(cssHSLm1);
    let squarem2 = document.querySelector("#squarem2");
    let cssHSLm2 = `hsl(${Math.round(h - 180)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarem2.style.backgroundColor = cssHSLm2;
    document.querySelector("#hslm2").textContent = cssHSLm2;

    let squarep1 = document.querySelector("#squarep1");
    let cssHSLp1 = `hsl(${Math.round(h + 30)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarep1.style.backgroundColor = cssHSLp1;
    document.querySelector("#hslp1").textContent = cssHSLp1;

    let squarep2 = document.querySelector("#squarep2");
    let cssHSLp2 = `hsl(${Math.round(h + 60)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarep2.style.backgroundColor = cssHSLp2;
    document.querySelector("#hslp2").textContent = cssHSLp2;
  }

  TriadCT();

  function TriadCT() {
    document.querySelector("#basecolor").classList.add("highlight");
    let squarem1 = document.querySelector("#squarem1");
    let cssHSLm1 = `hsl(${Math.round(h - 120)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarem1.style.backgroundColor = cssHSLm1;
    document.querySelector("#hslm1").textContent = cssHSLm1;
    document.querySelector("#col1").classList.add("highlight");
    console.log(cssHSLm1);
    let squarem2 = document.querySelector("#squarem2");
    let cssHSLm2 = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l - 15)}%)`;
    squarem2.style.backgroundColor = cssHSLm2;
    document.querySelector("#hslm2").textContent = cssHSLm2;

    let squarep1 = document.querySelector("#squarep1");
    let cssHSLp1 = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l + 15)}%)`;
    squarep1.style.backgroundColor = cssHSLp1;
    document.querySelector("#hslp1").textContent = cssHSLp1;

    let squarep2 = document.querySelector("#squarep2");
    let cssHSLp2 = `hsl(${Math.round(h + 120)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
    squarep2.style.backgroundColor = cssHSLp2;
    document.querySelector("#hslp2").textContent = cssHSLp2;
    document.querySelector("#col5").classList.add("highlight");
  }

}
