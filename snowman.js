const snowman = document.getElementById("snowball-body");
const head = document.getElementById("snowball-head");
// first body part
function leftsnowman(){
    const snowman = document.getElementById("snowball-body");
    const rectsnowman = snowman.getBoundingClientRect();
    snowman.style.position = "absolute";
    snowman.style.left = (rectsnowman.left-10) + "px";
}
function rightsnowman(){
    const snowman = document.getElementById("snowball-body");
    const rectsnowman = snowman.getBoundingClientRect();
    snowman.style.position = "absolute";
    snowman.style.left = (rectsnowman.left+10) + "px";
}function upsnowman(){
    const snowman = document.getElementById("snowball-body");
    const rectsnowman = snowman.getBoundingClientRect();
    snowman.style.position = "absolute";
    snowman.style.top = (rectsnowman.top-10) + "px";
}
function downsnowman(){
    const snowman = document.getElementById("snowball-body");
    const rectsnowman = snowman.getBoundingClientRect();
    snowman.style.position = "absolute";
    snowman.style.top = (rectsnowman.top+10) + "px";
}
function snowmanincrease(){
    const snowman = document.getElementById("snowball-body");
    const rectsnowman = snowman.getBoundingClientRect();
    snowman.style.width = (rectsnowman.width+10) + "px";
    snowman.style.height = (rectsnowman.height+10) + "px";
}
function snowmandecrease(){
    const snowman = document.getElementById("snowball-body");
    const rectsnowman = snowman.getBoundingClientRect();
    snowman.style.width = (rectsnowman.width-20) + "px";
    snowman.style.height = (rectsnowman.height-20) + "px";
}
// second body parts
function left1(){
    const snowman1 = document.getElementById("snowball-body1");
    const rectsnowman1 = snowman1.getBoundingClientRect();
    snowman1.style.position = "absolute";
    snowman1.style.left = (rectsnowman1.left-10) + "px";
}
function right1(){
    const snowman1 = document.getElementById("snowball-body1");
    const rectsnowman1 = snowman1.getBoundingClientRect();
    snowman1.style.position = "absolute";
    snowman1.style.left = (rectsnowman1.left+10) + "px";
}function up1(){
    const snowman1 = document.getElementById("snowball-body1");
    const rectsnowman1 = snowman1.getBoundingClientRect();
    snowman1.style.position = "absolute";
    snowman1.style.top = (rectsnowman1.top-10) + "px";
}
function down1(){
    const snowman1 = document.getElementById("snowball-body1");
    const rectsnowman1 = snowman1.getBoundingClientRect();
    snowman1.style.position = "absolute";
    snowman1.style.top = (rectsnowman1.top+10) + "px";
}
function increase1(){
    const snowman1 = document.getElementById("snowball-body1");
    const rectsnowman1 = snowman1.getBoundingClientRect();
    snowman1.style.width = (rectsnowman1.width+10) + "px";
    snowman1.style.height = (rectsnowman1.height+10) + "px";
}
function decrease1(){
    const snowman1 = document.getElementById("snowball-body1");
    const rectsnowman1 = snowman1.getBoundingClientRect();
    snowman1.style.width = (rectsnowman1.width-20) + "px";
    snowman1.style.height = (rectsnowman1.height-20) + "px";
}
// head
function left2(){
    const snowman1head = document.getElementById("head");
    const rectsnowman1head = snowman1head.getBoundingClientRect();
    snowman1head.style.position = "absolute";
    snowman1head.style.left = (rectsnowman1head.left-10) + "px";
}
function right2(){
    const snowman1head = document.getElementById("head");
    const rectsnowman1head = snowman1head.getBoundingClientRect();
    snowman1head.style.position = "absolute";
    snowman1head.style.left = (rectsnowman1head.left+10) + "px";
}function up2(){
    const snowman1head = document.getElementById("head");
    const rectsnowman1head = snowman1head.getBoundingClientRect();
    snowman1head.style.position = "absolute";
    snowman1head.style.top = (rectsnowman1head.top-10) + "px";
}
function down2(){
    const snowman1head = document.getElementById("head");
    const rectsnowman1head = snowman1head.getBoundingClientRect();
    snowman1head.style.position = "absolute";
    snowman1head.style.top = (rectsnowman1head.top+10) + "px";
}
function increase2(){
    const snowman1head = document.getElementById("head");
    const rectsnowman1head = snowman1head.getBoundingClientRect();
    snowman1head.style.width = (rectsnowman1head.width+10) + "px";
    snowman1head.style.height = (rectsnowman1head.height+10) + "px";
}
function decrease2(){
    const snowman1head = document.getElementById("head");
    const rectsnowman1head = snowman1head.getBoundingClientRect();
    snowman1head.style.width = (rectsnowman1head.width-20) + "px";
    snowman1head.style.height = (rectsnowman1head.height-20) + "px";
}