const cover = document.getElementById('cover');
const segment = document.getElementById('segment');
const leftCard = document.getElementById('leftText');
const rightCard = document.getElementById('rightText');
const leftCardd = document.getElementById('leftCard');
const rightCardd = document.getElementById('rightCard');
const dial = document.getElementById('dial');
const spinIcon = document.getElementById('spinIcon');
let isRotated = false;
let currentRotation = 0;
const maxRotation = 90 * 12.5 / 13;
let n = 1;


const wavelengthCards = [
  ["Hot", "Cold"],
  ["Loud", "Quiet"],
  ["Fast", "Slow"],
  ["Bright", "Dim"],
  ["Hard", "Soft"],
  ["Sweet", "Bitter"],
  ["Tall", "Short"],
  ["Heavy", "Light"],
  ["Old", "New"],
  ["Smooth", "Rough"],
  ["Wet", "Dry"],
  ["Big", "Small"],
  ["Rough", "Smooth"],
  ["Long", "Short"],
  ["Near", "Far"],
  ["Easy", "Difficult"],
  ["Young", "Old"],
  ["Sharp", "Dull"],
  ["Fresh", "Stale"],
  ["Beautiful", "Ugly"],
  ["Straight", "Curved"],
  ["Expensive", "Cheap"],
  ["Clean", "Messy"],
  ["Safe", "Dangerous"],
  ["Noisy", "Quiet"],
  ["Strong", "Fragile"],
  ["Hero", "Villain"],
  ["Rare", "Common"],
  ["Poorly Made", "Well Made"],
  ["Dry Food", "Wet Food"],
  ["Bad Movie", "Good Movie"],
  ["Round Animal", "Pointy Animal"],
  ["Invisible", "Visible"],
  ["Mundane", "Magical"],
  ["Ancient", "Futuristic"],
  ["Overrated", "Underrated"],
  ["Lost Cause", "Worth Fighting For"],
  ["Insignificant", "World-Changing"],
  ["Unpopular Opinion", "Popular Opinion"],
  ["Normal Thing to Own", "Weird Thing to Own"],
  ["Requires Luck", "Requires Skill"],
  ["Romantic Movie", "Unromantic Movie"],
  ["Good Pet", "Bad Pet"],
  ["Trashy", "Classy"],
  ["Nature", "Nurture"],
  ["Useless Invention", "Useful Invention"],
  ["Bad Pizza Topping", "Good Pizza Topping"],
  ["Easy to Spell", "Hard to Spell"],
  ["Smells Good", "Smells Bad"],
  ["Stationary", "Mobile"],
  ["Unstable", "Stable"],
  ["Harmless", "Harmful"],
  ["Messy Food", "Clean Food"],
  ["Secret", "Public Knowledge"],
  ["Temporary", "Permanent"],
  ["Waste of Time", "Good Use of Time"],
  ["Important", "Unimportant"],
  ["Funny Topic", "Serious Topic"],
  ["Best Day of the Year", "Worst Day of the Year"]
];






function rotate() {
	if (isRotated) {
		cover.style.opacity = 1
	}
   isRotated = !isRotated;
   const rotationDegree = isRotated ? 180 : 0;
   cover.style.transform = `rotate(${rotationDegree}deg)`;
	setTimeout(() => {
   	if (isRotated) {
      	cover.style.opacity = 0;
      } 
   }, 1000);
}

function getRandomRotation() {
    const range = 90; // The desired range from -90 to 90 degrees
    const peak = 50; // Adjust this value to control the peakiness of the distribution (higher values make it less likely to get values around 0)
    
    // Generate a random number between 0 and 1
    const randomValue = Math.random();

    // Calculate the biased value based on your distribution
    const biasedValue = (randomValue - 0.5) * (range + peak);

    // Round the biased value to the nearest integer
    const rotationDegree = Math.round(biasedValue);

    return rotationDegree;
}

function spin() {
    const rotationDegree = getRandomRotation();
    segment.style.transform = `rotate(${rotationDegree}deg)`;
	 spinIcon.style.transform = `rotate(${360*n}deg)`;
	 n += 1;
}

function newCard() {
	const randomItem = Math.floor(Math.random() * wavelengthCards.length)
	const pair = wavelengthCards[randomItem]
	rightCard.innerHTML = pair[0]
	leftCard.innerHTML = pair[1]
}

function moveDial(inc) {
	const rotationDegree = inc * 90 / 13;
	if (Math.abs(currentRotation + rotationDegree) < maxRotation) {
		currentRotation += rotationDegree;
		dial.style.transform = `rotate(${currentRotation}deg)`;
	}
}

function resetRot() {
	currentRotation = 0;
	dial.style.transform = `rotate(${currentRotation}deg)`;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker;
      .register("/serviceWorker.js");
      .then(res => console.log("service worker registered"));
      .catch(err => console.log("service worker not registered", err));
  });
}