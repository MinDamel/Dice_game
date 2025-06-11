var num = (Math.floor(Math.random() * 6) + 1);
var dicepath = "images/dice" + num + ".png";
document.querySelector(".img1").setAttribute("src", dicepath);

var num2 = (Math.floor(Math.random() * 6) + 1);
var dicepath2 = "images/dice" + num2 + ".png";
document.querySelector(".img2").setAttribute("src", dicepath2);

var heading = document.querySelector("h1");
heading.style.fontSize = "5rem";

if(num > num2){
    heading.innerHTML = "Player 1 wins🚩"
}
else if(num < num2){
    heading.innerHTML = "Player 2 wins🚩"
}
else{
    heading.innerHTML = "Draw🏁"
}

