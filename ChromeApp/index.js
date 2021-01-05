//camel Case 변수이름은 소문자로 시작해서 스페이스가 필요할 때 대문자, daysOfWeek

// Datatype
//String, Boolean, Number, Float

// Organizing Data
//Array(배열, 리스트)  []
//const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//console.log(daysOfWeek);

//Object {} (구조체)
/*const nicoInfo = {
    name:"Nico",
    age:33,
    gender:"Male",
    inHandsome:true
}
nicoInfo.gender = "Female" // const 이지만 Object안에 값 변경 가능, 
console.log(nicoInfo.gender);

*/

//Function
/*
function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas",15);

console.log(greetNicolas);

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    }

}

const plus = calculator.plus(5,5);
console.log(plus);
*/

// JS DOM function
/*
const title = document.querySelector("#title");

title.innerHTML = "Hi! From JS";
title.style.color = 'white';
console.dir(document);
document.title = 'I own you now';
*/

// Document Object Model
/*
function handleClick(){
    title.style.color = "blue";
}
*/
//Event

//title.addEventListener("click", handleClick);


// if - else
/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init();

function handleOnline(){
    console.log("Welcome back");
}
function handleOffline(){
    console.log("lalala");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/
// HTML JavaScript DOM event MDN !! Always use MDN


//if -else function 2
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
