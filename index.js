const first = new Audio();
const second = new Audio();
const third = new Audio();
const fourth = new Audio();
first.src = "1.mp3";
second.src = "2.mp3";
third.src = "3.mp3";
fourth.src = "4.mp3";
function firstsong(){
    alert("First song selected! (Beautiful Chrismas)");
   first.play();
   second.pause();
   second.currentTime = 0;
   third.pause();
   third.currentTime = 0;
   fourth.pause();
   fourth.currentTime = 0;
}
function secondsong(){
    alert("Second song selected! (Chrismas Holiday)");
   second.play();
   first.pause();
   first.currentTime = 0;
   third.pause();
   third.currentTime = 0;
   fourth.pause();
   fourth.currentTime = 0;
}
function thirdsong(){
    alert("Third song selected! (Chrismas Party)");
   third.play();
   first.pause();
   first.currentTime = 0;
   second.currentTime = 0;
   fourth.pause();
   fourth.currentTime = 0;
}
function fourthsong(){
    alert("Fourth song selected! (Warm HolichrisMas)");
   fourth.play();
   first.pause();
   first.currentTime = 0;
   second.pause();
   second.currentTime = 0;
   third.pause();
   third.currentTime = 0;
}
function reset(){
    alert("Stopped all playing media");
       first.pause();
   first.currentTime = 0;
   second.pause();
   second.currentTime = 0;
   third.pause();
   third.currentTime = 0;
    fourth.pause();
   fourth.currentTime = 0;
   
}
