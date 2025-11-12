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


//This section makes the diamonds with skills 
const text = document.querySelector(".infoTitle");
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
  text.style.color = "red";
});

python.addEventListener("mouseenter", () => {
  text.textContent = "Python";
  text.style.color = "red";
});

js.addEventListener("mouseenter", () => {
  text.textContent = "Javascript";
  text.style.color = "red";
});

php.addEventListener("mouseenter", () => {
  text.textContent = "PHP";
  text.style.color = "red";
});

html.addEventListener("mouseenter", () => {
  text.textContent = "HTML";
  text.style.color = "red";
});

css.addEventListener("mouseenter", () => {
  text.textContent = "CSS";
  text.style.color = "red";
});

aws.addEventListener("mouseenter", () => {
  text.textContent = "AWS";
  text.style.color = "red";
});

sql.addEventListener("mouseenter", () => {
  text.textContent = "SQL";
  text.style.color = "red";
});

wireshark.addEventListener("mouseenter", () => {
  text.textContent = "Wireshark";
  text.style.color = "red";
});

virtualbox.addEventListener("mouseenter", () => {
  text.textContent = "Virtualbox";
  text.style.color = "red";
});
