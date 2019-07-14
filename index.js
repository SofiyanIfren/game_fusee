var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// ********************************************************************************************************************
// *************************** Paramétrage d'un objet FUSEE ***********************************************************
// ********************************************************************************************************************
x_fusee = 625;
y_fusee = 650;
rayon_fusee = 25;
angle_depart_fusee = 0;
angle_fin_fusee = Math.PI*2;
sens_trace_fusee = false; // Par défaut: sens des aiguilles d'une montre
function drawFusee (){
    ctx.beginPath();
    ctx.arc(x_fusee, y_fusee, rayon_fusee, angle_depart_fusee, angle_fin_fusee, sens_trace_fusee);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}
// ********************************************************************************************************************
// **************************** Paramétrage des objets BOULE **********************************************************
// ********************************************************************************************************************
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
x_boule_rouge = canvas.width;
y_boule_rouge = getRandomInt(canvas.width);
rayon_boule_rouge = 25;
angle_depart_boule_rouge = 0;
angle_fin_boule_rouge = Math.PI*2;
sens_trace_boule_rouge = false; // Par défaut: sens des aiguilles d'une montre
function drawBouleRouge (){
    ctx.beginPath();
    ctx.arc(x_boule_rouge, y_boule_rouge, rayon_boule_rouge, angle_depart_boule_rouge, angle_fin_boule_rouge, sens_trace_boule_rouge);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
/*
function drawBouleVerte (){
    ctx.beginPath();
    ctx.arc(x_boule, y_boule, rayon_boule, angle_depart_boule, angle_fin_boule, sens_trace_boule);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}*/
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
// ************************** Fonction MAIN - Dessin du Canvas ********************************************************
// ********************************************************************************************************************
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); // On efface tout avant de tout retracer avec les new datas
    drawFusee(x_fusee, y_fusee, rayon_fusee, angle_depart_fusee, angle_fin_fusee, sens_trace_fusee);
    drawBouleRouge(x_boule_rouge, y_boule_rouge, rayon_boule_rouge, angle_depart_boule_rouge, angle_fin_boule_rouge, sens_trace_boule_rouge);
    //drawBouleVerte(x_boule, y_boule, rayon_boule, angle_depart_boule, angle_fin_boule, sens_trace_boule);
    // Gestion de la mobilité de la fusée
    if (leftPressed && x_fusee > (rayon_fusee*2)){
        x_fusee -= 7;
    }
    if (rightPressed && x_fusee < canvas.width-(rayon_fusee*2)){
        x_fusee += 7;
    }
    if (upPressed && y_fusee > (rayon_fusee*2)){
        y_fusee -= 7;
    }
    if (downPressed && y_fusee < canvas.height-(rayon_fusee*2)){
        y_fusee += 7;
    }
    // Génération des ennemis
    x_boule_rouge -= 7;
}
setInterval(draw, 10); // On redessine toutes les 10 ms