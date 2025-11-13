//This function makes a "glow" effect follow the cursor
(function(){
  const follower = document.getElementById('follower');

  function move(x, y) {
    follower.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  }

  window.addEventListener('pointermove', e => {
    move(e.clientX, e.clientY);
  }, { passive: true });
})();

//This function creates a typing effect that cycles through a list of words
const words = ["developer", "student", "creator", "learner"];
let index = 0;
let typeDelete = 0;
const typeSpeed = 100;
let currentWord = "";
let j = words[index].length; 
const modWord = document.getElementById("changingText");
function type() {
  currentWord = words[index];
  if (typeDelete == 0) {
    modWord.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      typeDelete = 1;
      index = (index + 1) % words.length;
      setTimeout(type, 500);
      return;
    }
  }
  if (typeDelete == 1){
    modWord.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length){
      typeDelete = 0;
      setTimeout(type, 1500);
      return;
    }
  }
  setTimeout(type, typeSpeed / 2);
}
type();


//This section makes the diamonds with skills and changes what the box says when they are hovered
const text = document.querySelector(".infoTitle");
const body = document.getElementById("body");

const java = document.getElementById("java");
const python = document.getElementById("python");
const js = document.getElementById("js");
const php = document.getElementById("php");
const html = document.getElementById("html");
const css = document.getElementById("css");
const aws = document.getElementById("aws");
const sql = document.getElementById("sql");
const wireshark = document.getElementById("wireshark");
const virtualbox = document.getElementById("virtualbox");



java.addEventListener("mouseenter", () => {
  text.textContent = "Java";
  body.textContent = ""
});

python.addEventListener("mouseenter", () => {
  text.textContent = "Python";
});

js.addEventListener("mouseenter", () => {
  text.textContent = "Javascript";
});

php.addEventListener("mouseenter", () => {
  text.textContent = "PHP";
});

html.addEventListener("mouseenter", () => {
  text.textContent = "HTML";
});

css.addEventListener("mouseenter", () => {
  text.textContent = "CSS";
});

aws.addEventListener("mouseenter", () => {
  text.textContent = "AWS";
});

sql.addEventListener("mouseenter", () => {
  text.textContent = "SQL";
});

wireshark.addEventListener("mouseenter", () => {
  text.textContent = "Wireshark";
});

virtualbox.addEventListener("mouseenter", () => {
  text.textContent = "Virtualbox";
});
