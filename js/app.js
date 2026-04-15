"use strict";

let countDisplay = document.querySelector("#counter");
let clickButton = document.querySelector("#click-button");
let resetButton = document.querySelector("#reset-button");

console.log(countDisplay, clickButton, resetButton);

let count = 0;

clickButton.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
});

resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});