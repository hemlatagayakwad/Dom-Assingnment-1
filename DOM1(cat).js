let bulbImageEl= document.getElementById("bulbImage");
let catImageEl = document.getElementById("catImage");
let switchesEl =  document.getElementById("switches");
let offSwitchEl =   document.getElementById("offSwitch");
let onSwitchEl =   document.getElementById("onSwitch");


function switchOff(){
    bulbImageEl.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchesEl.textContent ="Switched Off";
    switchesEl.style.fontSize ="30px";
    offSwitchEl.style.backgroundColor = "Red";
    onSwitchEl.style.backgroundColor = "white";
}
function switchOn() {
    bulbImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImageEl.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchesEl.textContent ="Switched On";
    onSwitchEl.style.backgroundColor = "green";
    offSwitchEl.style.backgroundColor = "white";
}