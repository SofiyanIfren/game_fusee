var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// ********************************************************************************************************************
// ******************************** Gestion events clavier ************************************************************
// ********************************************************************************************************************
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
// Le code 37 est celui de la touche LEFT & 39 celui de la touche RIGHT
// Le code 38 est celui de la touche UP & 40 celui de la touche DOWN
function keyDownHandler(e) {
    if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}
// ********************************************************************************************************************
// *************************** Paramétrage d'un objet FUSEE ***********************************************************
// ********************************************************************************************************************
x_fusee = 625;
y_fusee = 650;
largeur_fusee = 50;
longueur_fusee = 50;
function drawFusee (color){
    ctx.beginPath();
    ctx.rect(x_fusee, y_fusee, largeur_fusee, longueur_fusee);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// ********************************************************************************************************************
// **************************** Paramétrage des objets ENEMY **********************************************************
// ********************************************************************************************************************
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// Premier ennemi
largeur_ennemi_1 = 50;
longueur_ennemi_1 = 50;
x_ennemi_1 = canvas.width+largeur_ennemi_1;
y_ennemi_1 = getRandomInt(canvas.height-largeur_ennemi_1);
function drawEnemy_1 (color){
    ctx.beginPath();
    ctx.rect(x_ennemi_1, y_ennemi_1, largeur_ennemi_1, longueur_ennemi_1);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// Second ennemi
largeur_ennemi_2 = 50;
longueur_ennemi_2 = 50;
x_ennemi_2 = canvas.width+largeur_ennemi_2;
y_ennemi_2 = getRandomInt(canvas.height-largeur_ennemi_2);
function drawEnemy_2 (color){
    ctx.beginPath();
    ctx.rect(x_ennemi_2, y_ennemi_2, largeur_ennemi_2, longueur_ennemi_2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// ********************************************************************************************************************
// ************************** Fonction MAIN - Dessin du Canvas ********************************************************
// ********************************************************************************************************************
function draw(){
    drawFusee("white");
    if (leftPressed && x_fusee > (largeur_fusee*2)){
        x_fusee -= 7;
    }
    if (rightPressed && x_fusee < canvas.width-(largeur_fusee*2)){
        x_fusee += 7;
    }
    if (upPressed && y_fusee > (largeur_fusee*2)){
        y_fusee -= 7;
    }
    if (downPressed && y_fusee < canvas.height-(largeur_fusee*2)){
        y_fusee += 7;
    }
    drawFusee("blue");
}
setInterval(draw, 10);

function drawEnemy01(){
    drawEnemy_1("white");
    if (x_ennemi_1 <= (canvas.width+largeur_ennemi_1) && x_ennemi_1 >= (-largeur_ennemi_1)){
        x_ennemi_1 -= 7;
    } else {
        x_ennemi_1 = canvas.width+largeur_ennemi_1;
        y_ennemi_1 = getRandomInt(canvas.height-largeur_ennemi_1);
    }
    drawEnemy_1("red");
}
setInterval(drawEnemy01, 15);

function drawEnemy02(){
    drawEnemy_2("white");
    if (x_ennemi_2 <= (canvas.width+largeur_ennemi_2) && x_ennemi_2 >= (-largeur_ennemi_2)){
        x_ennemi_2 -= 7;
    } else {
        x_ennemi_2 = canvas.width+largeur_ennemi_2;
        y_ennemi_2 = getRandomInt(canvas.height-largeur_ennemi_2);
    }
    drawEnemy_2("orange");
}
setInterval(drawEnemy02, 30);