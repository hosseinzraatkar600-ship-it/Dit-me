const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const funText = document.getElementById("funText");
const formBox = document.getElementById("formBox");
const sendBtn = document.getElementById("sendBtn");

let size = 1;

const messages = [
  "Are you sure? 🥺",
  "Think again 😭",
  "Please don't say no 😂",
  "Come on... 💕",
  "You know you want to 😌"
];

let count = 0;


noBtn.onclick = function(){

  count++;

  if(count < messages.length){
    funText.innerHTML = messages[count];
  }

  size += 0.2;
  yesBtn.style.transform = `scale(${size})`;

  noBtn.style.transform =
  `scale(${Math.max(0.3, 1 - count*0.15)})`;

  if(count >= 5){
    noBtn.style.display = "none";
    funText.innerHTML = "Okay you have to say YES now 😂❤️";
  }

};


yesBtn.onclick = function(){

  document.querySelector("#yesBtn").style.display="none";
  document.querySelector("#noBtn").style.display="none";

  funText.innerHTML =
  "Yay! Let's plan it 💕";

  formBox.style.display="block";

};


sendBtn.onclick = function(){

  let day = document.getElementById("day").value;
  let time = document.getElementById("time").value;
  let place = document.getElementById("place").value;


  if(day && time){

    formBox.innerHTML =
    `
    <h2>
    Okay, see you then 💕
    </h2>
    <p>
    I'm happy about it 😊
    </p>
    `;

    console.log({
      day,
      time,
      place
    });

  } else {

    alert("Please choose day and time ❤️");

  }

};
