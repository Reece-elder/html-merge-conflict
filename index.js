`use strict`;

let nameList = [
    "Reece",
    "Tony",
    "Sam",
    "Billy"	
];

let foods = [
    "Pizza", 
    "Lasagna",
    "Goulash",
    "Stew"
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
