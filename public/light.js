let btn = document.querySelector('.btn');
let btn2 = document.querySelector("#veya");
let body = document.querySelector('body');
let audio = document.querySelector('#btnaudio');

let count = 0;
let lastClickTime = 0;
let kirildimi = false;

setInterval(() => {
  count = 0;
}, 1000);

btn2.addEventListener("click", clickHandler);
btn.addEventListener("click", clickHandler);

function clickHandler() {
    if(kirildimi) return;
  btn.classList.toggle("click");
  body.classList.toggle('on');
const now = Date.now();
  count++;
  console.log(lastClickTime, count);
  lastClickTime = now;

if(count > 8) {
  kirildimi = true;
  localStorage.setItem("patladimi", "bom");
  document.querySelector(".bulb").classList.add("kirildi");
  btn.classList.add("disabled");
  btn2.classList.add("disabled");
  body.classList.remove("on");
  document.querySelector(".allahuakbar").classList.add("bom");
  sourcee.stop();
try {
  degisti = true;
  audio.currentTime = 0;
  audio.src = "/public/break.mp3"
  audio.play();
  document.querySelector(".bes").classList.add("bom");
  document.querySelector(".bes > h1").innerHTML = `Ertunun Annesini Sahiplendiricez...`;
setTimeout(() => {
  audio.currentTime = 0;
  audio.src = "/public/hudapar.mp3";
  audio.play();
setTimeout(() => {
  audio.currentTime = 0;
  audio.src = "/public/bomba.mp3";
  audio.play();
}, 2000);
setTimeout(() => {
  audio.currentTime = 0;
  audio.src = "/public/mars.mp3";
  audio.play();
}, 4000);
}, 1100);
} catch (err) {
  console.error(err)
}
} else {
try {
  audio.currentTime = 0;
  audio.play();
} catch (err) {
  console.error(err)
};
}
}