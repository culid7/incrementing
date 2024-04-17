// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

rand1Btn.addEventListener("click", showrand1);
rand2Btn.addEventListener("click", showrand2);
rand3Btn.addEventListener("click", showrand3);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

function showRand1() {
  var ranum = Math.random() * 101;
  ranum = ranum.toFixed(3);
  rand2OutEl.innerHTML = ranum;
}

function showRand3() {
  var ran2 = Math.random() * 10 - 5;
  ran2 = ran2.toFixed(3);
  rand3OutEl.innerHTML = ran2;
}
var rand4 = document
  .getElementById("rand4")
  .addEventListener("click", showrand4);

function randomfontsize() {
  let fontsize = math.random * (25 - 5) + 5;
  var fontString = `${fontSize}px`;
  document.body.style.fontSize = fontString;
}

function randomColor() {
  let green = math.random() * 255;
  let red = Math.random() * 255;
  let blue = Math.random() * 255;
  var rgbString = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("HTML").style.background = rgbString;
}
