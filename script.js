"use strict";

window.addEventListener("load", pushArray); //Start on load

const displayBar = document.querySelector(".wrapper");
const array = [];
let i = 0;

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32); //Get random number
}

function pushArray() {
  //Set interval to repeat +1 to the conter every second
  setInterval(function () {
    array.push(getNumberOfCustomers()); //Push new number each interval

    //Create new element for each number
    const newDiv = document.createElement("span");
    const newP = document.createElement("p");
    newDiv.style.height = `${array[i]}em`;
    newP.innerHTML = array[i];
    displayBar.appendChild(newDiv);
    newDiv.appendChild(newP);
    console.log(array);

    //Check lenght and remove last item
    if (array.length >= 40) {
      array.shift();
      displayBar.removeChild(displayBar.firstElementChild); //Remove element when reaches limit
    } else {
      i++;
    }
  }, 1000);
}
