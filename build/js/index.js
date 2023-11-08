const canvas = document.getElementById("canvas");
const minus = document.getElementById("-");
const plus = document.getElementById("+");
const color = document.getElementById("color");
const number = document.getElementById("number");
const clear = document.getElementById("x");
const ctx = canvas.getContext("2d");
let pressed = false;
let size = 20;
let lastX ;
let lastY ;

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color.value;
    ctx.fill();
    lastX = x;
    lastY = y;
}

function drawLine(x2, y2){
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color.value;
    ctx.lineWidth = size*2;
    ctx.stroke();
    lastX = x2;
    lastY = y2;
}

canvas.addEventListener("mousedown", (e)=>{
    pressed = true;

    lastX = e.clientX - canvas.offsetLeft;
    lastY = e.clientY - canvas.offsetTop;

    drawCircle(lastX,lastY)
});

canvas.addEventListener("mousemove", (e)=>{
    if(pressed){

        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
        drawLine(x,y)
        drawCircle(x,y)
    }

});

canvas.addEventListener("mouseup", (e)=>{
    pressed = false;

});

canvas.addEventListener("mouseenter", (e)=>{
    pressed = false;

});

clear.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, 800, 800);
})

minus.addEventListener("click", ()=>{
    if(number.innerText<=5){
        size = 5;
        number.innerText = size;
    }else{
        size = parseInt(number.innerText)-5;
        number.innerText = size;
    }
});

plus.addEventListener("click", ()=>{
    if(number.innerText>=30){
        size = 30;
        number.innerText = size;
    }else{
        size = parseInt(number.innerText)+5;
        number.innerText = size;
    }
});