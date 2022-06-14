const modeToggle = document.getElementById("toggle-input");
const letterInputEntry = document.getElementById("letter-input-entry");
const displayLetterImg = document.getElementById("display-letter-img");
const phoneticWord = document.getElementById("phonetic-word");
const pronunciation = document.getElementById("pronunciation");
const copyYears = document.getElementById("copy-years");
let alphaPosition = 0;
let currentLetter = "";

// Initialize functions
const init = () => {
  setCopyYears();
  loadAlphaItems();
  displayAlpha();
};

// Function definitions
const setCopyYears = () => {
  const originalYear = 2021;
  const currentDate = new Date();
  copyYears.innerText =
    originalYear === currentDate.getFullYear()
      ? `${originalYear}`
      : `${originalYear} - ${currentDate.getFullYear()}`;
};

const loadAlphaItems = () => {
  return alpha;
};

const displayAlpha = () => {
  currentLetter = new AlphaLetter(alpha[alphaPosition]);

  letterInputEntry.value = currentLetter.letter;
  letterInputEntry.blur();
  displayLetterImg.innerHTML = currentLetter.renderLetterImg();

  phoneticWord.textContent = currentLetter.phoneticWord;
  pronunciation.innerHTML = currentLetter.stressPronounce();
};

const updateDisplayLetter = (event) => {
  const newLetter = event.target.value.toUpperCase();
  const newLetterPosition = alpha
    .map((element) => element.letter)
    .indexOf(newLetter);
  alphaPosition = newLetterPosition;

  displayAlpha();
};

document.getElementById("arrow-left").addEventListener("click", () => {
  alphaPosition === 0 ? (alphaPosition = 25) : alphaPosition--;
  displayAlpha();
});

document.getElementById("arrow-right").addEventListener("click", () => {
  alphaPosition === 25 ? (alphaPosition = 0) : alphaPosition++;
  displayAlpha();
});

letterInputEntry.addEventListener("click", (event) => {
  letterInputEntry.value = "";
});

letterInputEntry.addEventListener("blur", (event) => {
  if (letterInputEntry.value.length === 0) {
    letterInputEntry.value = currentLetter.letter;
  }
  updateDisplayLetter(event);
});

letterInputEntry.addEventListener("keyup", (event) => {
  const keyPressed = event.key;

  if (keyPressed === "Enter") {
    if (letterInputEntry.value.length === 0) {
      letterInputEntry.value = currentLetter.letter;
    }
    updateDisplayLetter(event);
  }
});

modeToggle.addEventListener("click", (event) => {
  if (modeToggle.checked) {
    document.body.style.backgroundColor = "#8a2be2";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
});

// Load page
init();
