let retangulo1 = {
    x : 0,
    y : 0,
    largura : 50,
    altura : 50,
    cor: "red"
};
let retangulo2 = {
    x : 100,
    y : 100,
    largura : 50,
    altura : 50,
    cor: "blue"
};


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function retangulo(ret){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = ret.cor;
    ctx.fillRect(ret.x, ret.y, ret.altura, ret.largura);
    ctx.closePath()
}

let mov = 1
function desenhar(){
    ctx.clearRect(0, 0, 400, 400)

    
    if(retangulo1.x == 400 - retangulo1.largura){
        mov = -1
    }
    if(retangulo1.x == 0){
        mov = 1
    } 

    retangulo1.x = retangulo1.x + mov

    retangulo(retangulo1)
    retangulo(retangulo2)

    requestAnimationFrame(desenhar)
}

desenhar()

document.addEventListener("keydown", function(evento) {
    var tecla = evento.key;
    console.log(tecla);
    var vel = 5
    if (tecla == "ArrowUp") {retangulo2.y -= vel}
    if (tecla == "ArrowDown") {retangulo2.y += vel}
    if (tecla == "ArrowRight") {retangulo2.x += vel}
    if (tecla == "ArrowLeft") {retangulo2.x -= vel}

    if (retangulo2.x == 400 - retangulo2.largura) {if (tecla == "ArrowRight") {retangulo2.x -= vel}}
    if (retangulo2.x == 0) {if (tecla == "ArrowLeft") {retangulo2.x += vel}}
    if (retangulo2.y == 0) {if (tecla == "ArrowUp") {retangulo2.y += vel}}
    if (retangulo2.y == 400 - retangulo2.altura) {if (tecla == "ArrowDown") {retangulo2.y -= vel}}
})

