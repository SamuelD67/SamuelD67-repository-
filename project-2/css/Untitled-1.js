
var character = document.getElementById("character");
var block = document.getElementById("block");

document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowUp') {
        jump();
    }
});

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
        setTimeout(removeJump,  300);
    }
}

function removeJump() {
    character.classList.remove("animate");
}

function checkCollision() {
    var characterTop = window.getComputedStyle(character).getPropertyValue("top");
    var blockLeft = window.getComputedStyle(block).getPropertyValue("left");
    if (blockLeft >  0 && blockLeft <  30 && characterTop >=  130) {
        alert("Game Over!");
    }
}

setInterval(checkCollision,  10);