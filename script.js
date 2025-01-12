const button = document.getElementById("btn");
const colors = ["red", "yellow", "green"];
let colorIndex = 0;
let intervalId;

function changeColor() {
    button.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

let miniSeconds =10000;
function toggleColor() {
    clearInterval(intervalId);
    changeColor();
    intervalId = setInterval(changeColor, miniSeconds);
}

intervalId = setInterval(changeColor, miniSeconds);
