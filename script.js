//This function makes a "glow" effect follow the cursor
const reveal = document.getElementById("follower");



document.addEventListener("mousemove", (e) => {
  reveal.style.setProperty("--x", e.pageX + "px");
  reveal.style.setProperty("--y", e.pageY + "px");
});



// (function(){
//   const follower = document.getElementById('follower');

//   function move(x, y) {
//     follower.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
//   }

//   window.addEventListener('pointermove', e => {
//     move(e.clientX, e.clientY);
//   }, { passive: true });
// })();






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
const spec = document.querySelector(".codeClass");

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
  body.innerHTML = `
    <ul>
      <li>Coursework: foundational coding and scripting applications</li>
      <li>Personal Tic Tac Toe application</li>
    </ul>
  `;
  spec.textContent = "Backend";
  spec.style.color = "orange";
});

python.addEventListener("mouseenter", () => {
  text.textContent = "Python";
  body.innerHTML = `
    <ul>
      <li>Coursework: Machine learning applications including data processing and model training</li>
    </ul>
  `;
  spec.textContent = "Backend";
  spec.style.color = "orange";
});

js.addEventListener("mouseenter", () => {
  text.textContent = "Javascript";
  body.innerHTML = `
    <ul>
      <li>Coursework: handling responsive nature of coursework websites</li>
      <li>Used to power the animations and interactive features of this site</li>
    <ul>
  `;
  spec.textContent = "Frontend";
  spec.style.color = "rgb(78, 78, 255)";
});

php.addEventListener("mouseenter", () => {
  text.textContent = "PHP";
    body.innerHTML = `
    <ul>
      <li>Coursework: backend scripting and serverside form handling</li>
    </ul>
  `;
  spec.textContent = "Backend";
  spec.style.color = "orange";
});

html.addEventListener("mouseenter", () => {
  text.textContent = "HTML";
  body.innerHTML = `
    <ul>
      <li>Coursework: created content for class projects</li>
      <li>Used to build the layout and content of this website</li>
    <ul>
  `;
  spec.textContent = "Frontend";
  spec.style.color = "rgb(78, 78, 255)";
});

css.addEventListener("mouseenter", () => {
  text.textContent = "CSS";
  body.innerHTML = `
    <ul>
      <li>Coursework: styled websites made for class projects</li>
      <li>Used to create the content of the website you're currently on</li>
    <ul>
  `;
  spec.textContent = "Frontend";
  spec.style.color = "rgb(78, 78, 255)";
});

aws.addEventListener("mouseenter", () => {
  text.textContent = "AWS";
  body.innerHTML = `
    <ul>
      <li>Coursework: used to deploy websites in AWS suite</li>
      <li>Configured cloud resources including EC2, S3, and VPCs</li>
    <ul>
  `;
  spec.textContent = "DevOps";
  spec.style.color = "rgba(255, 162, 0, 1)";
});

sql.addEventListener("mouseenter", () => {
  text.textContent = "SQL";
    body.innerHTML = `
    <ul>
      <li>Coursework: Used to manage backend databases and perform query operations</li>
    <ul>
  `;
  spec.textContent = "Backend";
  spec.style.color = "orange";
});

wireshark.addEventListener("mouseenter", () => {
  text.textContent = "Wireshark";
  spec.textContent = "Cybersecurity";
  body.innerHTML = `
    <ul>
      <li>Coursework: Used to capture and analyse packets in lab environment</li>
    <ul>
  `;
  spec.style.color = "rgba(255, 26, 91, 1)";
});

virtualbox.addEventListener("mouseenter", () => {
  text.textContent = "Virtualbox";
  spec.textContent = "Cybersecurity";
  body.innerHTML = `
    <ul>
      <li>Coursework: Created and managed virtual environments for testing purposes</li>
    <ul>
  `;
  spec.style.color = "rgba(255, 26, 91, 1)";
});


const nav = document.querySelector(".topnav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});
