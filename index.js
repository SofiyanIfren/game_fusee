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
x_fusee = 50;
y_fusee = canvas.height/2;
largeur_fusee = 100;
hauteur_fusee = 50;
function drawFusee (color){
    ctx.beginPath();
    ctx.rect(x_fusee, y_fusee, largeur_fusee, hauteur_fusee);
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
hauteur_ennemi_1 = 50;
x_ennemi_1 = canvas.width+largeur_ennemi_1;
y_ennemi_1 = getRandomInt(canvas.height-largeur_ennemi_1);
function drawEnemy_1 (color){
    ctx.beginPath();
    ctx.rect(x_ennemi_1, y_ennemi_1, largeur_ennemi_1, hauteur_ennemi_1);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// Second ennemi
largeur_ennemi_2 = 50;
hauteur_ennemi_2 = 50;
x_ennemi_2 = canvas.width+largeur_ennemi_2;
y_ennemi_2 = getRandomInt(canvas.height-largeur_ennemi_2);
function drawEnemy_2 (color){
    ctx.beginPath();
    ctx.rect(x_ennemi_2, y_ennemi_2, largeur_ennemi_2, hauteur_ennemi_2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// Troisieme ennemi
largeur_ennemi_3 = 50;
hauteur_ennemi_3 = 50;
x_ennemi_3 = canvas.width+largeur_ennemi_3;
y_ennemi_3 = getRandomInt(canvas.height-largeur_ennemi_3);
function drawEnemy_3 (color){
    ctx.beginPath();
    ctx.rect(x_ennemi_3, y_ennemi_3, largeur_ennemi_3, hauteur_ennemi_3);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// Quatrieme ennemi
largeur_ennemi_4 = 50;
hauteur_ennemi_4 = 50;
x_ennemi_4 = canvas.width+largeur_ennemi_4;
y_ennemi_4 = getRandomInt(canvas.height-largeur_ennemi_4);
function drawEnemy_4 (color){
    ctx.beginPath();
    ctx.rect(x_ennemi_4, y_ennemi_4, largeur_ennemi_4, hauteur_ennemi_4);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// Cinquieme ennemi
largeur_ennemi_5 = 50;
hauteur_ennemi_5 = 50;
x_ennemi_5 = canvas.width+largeur_ennemi_5;
y_ennemi_5 = getRandomInt(canvas.height-largeur_ennemi_5);
function drawEnemy_5 (color){
    ctx.beginPath();
    ctx.rect(x_ennemi_5, y_ennemi_5, largeur_ennemi_5, hauteur_ennemi_5);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// Sixieme ennemi
largeur_ennemi_6 = 50;
hauteur_ennemi_6 = 50;
x_ennemi_6 = canvas.width+largeur_ennemi_6;
y_ennemi_6 = getRandomInt(canvas.height-largeur_ennemi_6);
function drawEnemy_6 (color){
    ctx.beginPath();
    ctx.rect(x_ennemi_6, y_ennemi_6, largeur_ennemi_6, hauteur_ennemi_6);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// ********************************************************************************************************************
// **************************** Paramétrage des objets BONUS **********************************************************
// ********************************************************************************************************************
largeur_bonus = 50;
hauteur_bonus = 50;
x_bonus = canvas.width+largeur_bonus;
y_bonus = getRandomInt(canvas.height-largeur_bonus);
function drawBonus (color){
    ctx.beginPath();
    ctx.rect(x_bonus, y_bonus, largeur_bonus, hauteur_bonus);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// ********************************************************************************************************************
// ************************** Fonction de progressions des objets *****************************************************
// ********************************************************************************************************************
function draw(){
    drawFusee("white");
    if (leftPressed && x_fusee > (hauteur_fusee)){
        x_fusee -= 7;
    }
    if (rightPressed && x_fusee < canvas.width-(hauteur_fusee*3)){
        x_fusee += 7;
    }
    if (upPressed && y_fusee > (hauteur_fusee)){
        y_fusee -= 7;
    }
    if (downPressed && y_fusee < canvas.height-(hauteur_fusee*2)){
        y_fusee += 7;
    }
    drawFusee("blue");
}
// Ennemis
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
function drawEnemy03(){
    drawEnemy_3("white");
    if (x_ennemi_3 <= (canvas.width+largeur_ennemi_3) && x_ennemi_3 >= (-largeur_ennemi_3)){
        x_ennemi_3 -= 7;
    } else {
        x_ennemi_3 = canvas.width+largeur_ennemi_3;
        y_ennemi_3 = getRandomInt(canvas.height-largeur_ennemi_3);
    }
    drawEnemy_3("red");
}
function drawEnemy04(){
    drawEnemy_4("white");
    if (x_ennemi_4 <= (canvas.width+largeur_ennemi_4) && x_ennemi_4 >= (-largeur_ennemi_4)){
        x_ennemi_4 -= 7;
    } else {
        x_ennemi_4 = canvas.width+largeur_ennemi_4;
        y_ennemi_4 = getRandomInt(canvas.height-largeur_ennemi_4);
    }
    drawEnemy_4("orange");
}
function drawEnemy05(){
    drawEnemy_5("white");
    if (x_ennemi_5 <= (canvas.width+largeur_ennemi_5) && x_ennemi_5 >= (-largeur_ennemi_5)){
        x_ennemi_5 -= 7;
    } else {
        x_ennemi_5 = canvas.width+largeur_ennemi_5;
        y_ennemi_5 = getRandomInt(canvas.height-largeur_ennemi_5);
    }
    drawEnemy_5("red");
}
function drawEnemy06(){
    drawEnemy_6("white");
    if (x_ennemi_6 <= (canvas.width+largeur_ennemi_6) && x_ennemi_6 >= (-largeur_ennemi_6)){
        x_ennemi_6 -= 7;
    } else {
        x_ennemi_6 = canvas.width+largeur_ennemi_6;
        y_ennemi_6 = getRandomInt(canvas.height-largeur_ennemi_6);
    }
    drawEnemy_6("red");
}
// Bonus
function drawBonus01(){
    drawBonus("white");
    if (x_bonus <= (canvas.width+largeur_bonus) && x_bonus >= (-largeur_bonus)){
        x_bonus -= 7;
    } else {
        x_bonus = canvas.width+largeur_bonus;
        y_bonus = getRandomInt(canvas.height-largeur_bonus);
    }
    drawBonus("green");
}
// ********************************************************************************************************************
// ************************** Fonctions MAIN - Dessin du Canvas *******************************************************
// ********************************************************************************************************************
setInterval(drawEnemy01, 10);
setInterval(drawEnemy02, 15);
setInterval(drawEnemy03, 10);
setInterval(drawEnemy04, 15);
setInterval(drawEnemy05, 10);
setInterval(drawEnemy06, 10);
setInterval(drawBonus01, 10 );
setInterval(draw, 25);  // AUGMENTER L'INTERVALLE ICI DIMINUE LE FPS -> DIFFICULTE ++

// ********************************************************************************************************************
// ******************************** Temps, Score & Vies ***************************************************************
// ********************************************************************************************************************
