var sourcee;
let degisti = false;
window.addEventListener("DOMContentLoaded", function() {
const patladimi = localStorage.getItem("patladimi");
if(patladimi && patladimi === "bom") bitir();
else {
  t();const e=["nereden"],o=e[Math.floor(Math.random()*e.length)],n=new(window.AudioContext||window.webkitAudioContext);async function t(){fetch("/api").then((e=>e.json())).then((e=>document.querySelector("#sure").innerHTML=e.message))}navigator.mediaDevices.getUserMedia({audio:!0}).then((()=>{const e=n.createBufferSource();e.loop=!0;sourcee=e;const t=new XMLHttpRequest;t.open("GET",`/public/${o}.mp3`,!0),t.responseType="arraybuffer",t.onload=()=>{n.decodeAudioData(t.response,(o=>{e.buffer=o,e.connect(n.destination),e.start()}),(e=>{console.log("Error with decoding audio data"+e.message)}))},t.send()})).catch((e=>console.error(`Audio permissions denied: ${e}`))),setInterval((()=>{if(!degisti)t()}),1e3);

};
});

function bitir() {
  kirildimi = true;
  document.querySelector(".bulb").classList.add("kirildi");
  document.querySelector("#veya").classList.add("disabled");
  document.querySelector(".btn").classList.add("disabled");
  document.body.classList.remove("on");
  document.querySelector(".bes").classList.add("bom");
  document.querySelector(".allahuakbar").classList.add("bom");
  document.querySelector(".bes > h1").innerHTML = `<span style="color: rgb(calc(24 * 2), calc(28 * 2), calc(41 * 2)); cursor: pointer;" onclick="localStorage.removeItem('patladimi'); location.reload();">AmBulu Geri Tak</span>`;
let caldi = false;
document.onclick = function() {
  if(caldi) return;
  caldi = true;
const audio = document.querySelector("audio")
  audio.currentTime = 0;
  audio.src = "/public/birkadin.mp3";
  audio.loop = true;
  audio.play();
};
};
