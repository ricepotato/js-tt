const tt = document.getElementById("tt");
const ttInput = document.getElementById("ttInput");
const tetris = new Tetris(tt);

function handleKeyPress(event){
    console.log(event);
}

function addEvents(){
    ttInput.addEventListener("keydown", handleKeyPress);
}

function init(){
    addEvents();
    console.log("init");
    tetris.render();
}

init();