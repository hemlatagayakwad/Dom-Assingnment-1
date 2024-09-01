let buttonRedEl = document.getElementById("buttonRed");
let redLightEl = document.getElementById("redLight");3
let buttonYellowEl =document.getElementById("buttonYellow");
let yellowLightEl = document.getElementById("yellowLight");
let buttonGreenEl =document.getElementById("buttonGreen");
let greenLightEl = document.getElementById("greenLight");


function trafficRed(){
    buttonGreenEl.style.backgroundColor = "black";
    greenLightEl.style.backgroundColor ="rgb(90, 105, 109)"; 
    buttonYellowEl.style.backgroundColor = "black";
    yellowLightEl.style.backgroundColor ="rgb(90, 105, 109)"; 
    buttonRedEl.style.backgroundColor = "red";
    redLightEl.style.backgroundColor ="red";


}
function trafficYellow(){
    buttonGreenEl.style.backgroundColor = "black";
    greenLightEl.style.backgroundColor ="rgb(90, 105, 109)"; 
    buttonYellowEl.style.backgroundColor = "yellow";
    yellowLightEl.style.backgroundColor ="yellow"; 
    buttonRedEl.style.backgroundColor = "black";
    redLightEl.style.backgroundColor ="rgb(90, 105, 109)";


}
function trafficGreen(){
    buttonGreenEl.style.backgroundColor = "Green";
    greenLightEl.style.backgroundColor ="Green"; 
    buttonYellowEl.style.backgroundColor = "black";
    yellowLightEl.style.backgroundColor ="rgb(90, 105, 109)"; 
    buttonRedEl.style.backgroundColor = "black";
    redLightEl.style.backgroundColor ="rgb(90, 105, 109)";
}