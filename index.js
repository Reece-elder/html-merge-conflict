`use strict`;

console.log("Hello");

let nameList = [
    "Reece",
    "Tony"
    "adam"
    "Tony",
	  "Lukas",
    "Sam"	

];

let foods = [
    "Pizza",
    "Lasagna",
    "Chicken Fried Rice",
    "Pizza", 
    "Burgers",
    "Goulash"

];

const randName = nameList[Math.floor(Math.random() * nameList.length)];
const randFood = foods[Math.floor(Math.random() * foods.length)];

let websiteString = document.createElement('h2');
websiteString.textContent = `${randName}'s favourite food is ${randFood}`;

let websiteTitle = document.querySelector('#title');
console.log(websiteTitle);
console.log(websiteString);

websiteTitle.appendChild(websiteString);


console.log(randName);
console.log(randFood);
