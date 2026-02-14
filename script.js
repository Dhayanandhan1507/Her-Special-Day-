// TYPE EFFECT
const text="HAPPY BIRTHDAY POORVISHA ❤️";
let i=0;
const el=document.getElementById("typeText");
(function type(){
  if(i<text.length){
    el.innerHTML+=text[i++];
    setTimeout(type,150);
  }
})();

// PAGE SWITCH
function goPage(id){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// GIFT
function openGift(){
  document.getElementById("cake").style.display="block";
}

// LETTERS
const letters=[
  "Our first temple visit together filled my heart with peace, faith, and love forever. 🙏❤️",
  "Your laugh stays in my heart 😊",
  "Life feels beautiful with you ✨",
  "I am lucky to have you 🥰",
  "Your smile makes everything better 🌸",
  "You are my supportive lover and best friend, standing with me through every challenge always. ❤️"
];
function showLetter(n){
  document.getElementById("letterText").innerText=letters[n];
  document.getElementById("letter").style.display="flex";
}
function closeLetter(){
  document.getElementById("letter").style.display="none";
}

// VIDEO BUTTON LOGIC
function showVideo(){
  const video=document.getElementById("loveVideo");
  video.style.display="block";
  video.play();
}
