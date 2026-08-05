const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const funText = document.getElementById("funText");

const messages = [
  "Are you sure? 🥺",
  "Think again... 💔",
  "Come on 😭",
  "Pretty please? 🌸",
  "You know you want to 😏",
  "Last chance 😂"
];

let count = 0;
let yesSize = 1;

noBtn.addEventListener("click", () => {
    if (count < messages.length) {
        funText.innerText = messages[count];
    }

    count++;

    yesSize += 0.2;

    yesBtn.style.transform = `scale(${yesSize})`;

    noBtn.style.transform = `scale(${Math.max(0.2,1-count*0.15)})`;

    if(count > 6){
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    alert("Next step coming soon 💕");
});
