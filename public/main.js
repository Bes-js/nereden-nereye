const btn = document.querySelector('.btn');
const btn2 = document.querySelector("#veya");
const body = document.querySelector('body');
const audio = document.querySelector('#btnaudio');
var kirildimi = false;
var lastClickTime = 0;
var count = 0;
var sourcee;

window.addEventListener("DOMContentLoaded", function () {
const patladimi = localStorage.getItem("patladimi");
if (patladimi && patladimi === "bom") bitir();
else {
t();
const n = new (window.AudioContext || window.webkitAudioContext)();
navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
const e = n.createBufferSource();
  e.loop = true;
  sourcee = e;
const t = new XMLHttpRequest();
  t.open("GET", `/public/nereden.mp3`, true);
  t.responseType = "arraybuffer";
t.onload = function() {
 n.decodeAudioData(t.response, function(buffer) {
  e.buffer = buffer;
  e.connect(n.destination);
  e.start();
}, (error) => console.error("Ses verisini çözme hatası: " + error.message));
};
  t.send();
}).catch(error => console.error(`Ses izni reddedildi: ${error}`));

  t();
setInterval(() => { if(!kirildimi) t(); }, 1000);
async function t() {
  fetch("/api").then((response) => response.json()).then((data) => document.querySelector(".bes > h1").innerHTML = data.message);
};

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
  audio.currentTime = 0;
  audio.src = "/public/break.mp3"
  audio.play();
  document.querySelector(".bes").classList.add("bom");
  document.querySelector(".bes > h1").innerHTML = `Her Biji Kurdistan ☪️`;
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
};
}});

function bitir() {
  kirildimi = true;
  document.querySelector(".bulb").classList.add("kirildi");
  document.querySelector("#veya").classList.add("disabled");
  document.querySelector(".btn").classList.add("disabled");
  document.body.classList.remove("on");
  document.querySelector(".bes").classList.add("bom");
  document.querySelector(".allahuakbar").classList.add("bom");
  document.querySelector(".bes > h1").innerHTML = `<span style="color: rgb(calc(24 * 2), calc(28 * 2), calc(41 * 2)); cursor: pointer;" onclick="localStorage.removeItem('patladimi'); location.reload();">Ampulu Geri Tak 💡</span>`;

const n = new (window.AudioContext || window.webkitAudioContext)();
navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
const e = n.createBufferSource();
  e.loop = true;
  sourcee = e;
const t = new XMLHttpRequest();
  t.open("GET", `/public/mars.mp3`, true);
  t.responseType = "arraybuffer";
t.onload = function() {
 n.decodeAudioData(t.response, function(buffer) {
  e.buffer = buffer;
  e.connect(n.destination);
  e.start();
}, (error) => console.error("Ses verisini çözme hatası: " + error.message));
};
  t.send();
}).catch(error => console.error(`Ses izni reddedildi: ${error}`));
};
