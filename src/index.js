const displayLetter = document.getElementById('display-letter')
const changeLetter = document.getElementById('change-letter')
const changeLetterInput = document.getElementById('change-letter-input')
const displayLetterImg = document.getElementById('display-letter-img')
const phoneticWord = document.getElementById('phonetic-word')
const pronunciation = document.getElementById('pronunciation')
const copyYears = document.getElementById('copy-years')
let alphaPosition = 0
let currentLetter = ""

// Initialize functions
const init = () => {
    setCopyYears()
    loadAlphaItems()
    displayAlpha()
}

// Function definitions
const setCopyYears = () => {
    const originalYear = 2021
    const currentDate = new Date()
    copyYears.innerText = (originalYear === currentDate.getFullYear() ? `${originalYear}` : `${originalYear} - ${currentDate.getFullYear()}`)
}

const loadAlphaItems = () => { 
    return alpha
}

const displayAlpha = () => {

    currentLetter = new AlphaLetter(alpha[alphaPosition])

    displayLetter.textContent = currentLetter.letter
    displayLetterImg.innerHTML = currentLetter.renderLetterImg()
    
    phoneticWord.textContent = currentLetter.phoneticWord
    pronunciation.innerHTML = currentLetter.stressPronounce()

}

const changeDisplayLetter = () => {

    displayLetter.classList.add("hidden")
    changeLetter.classList.remove("hidden")

    changeLetterInput.placeholder = currentLetter.letter
      
    changeLetterInput.focus()
    changeLetterInput.select()
}

const updateDisplayLetter = (event) => {

    const newLetter = event.target.value.toUpperCase()
    const newLetterPosition = alpha.map(element => element.letter).indexOf(newLetter)
    alphaPosition = newLetterPosition

    changeLetter.classList.add("hidden")
    displayLetter.classList.remove("hidden")
    displayAlpha()
    changeLetterInput.value = ""
}

document.getElementById('arrow-left').addEventListener('click', () => {
    alphaPosition === 0 ? alphaPosition = 25 : alphaPosition--
    displayAlpha()
})

document.getElementById('arrow-right').addEventListener('click', () => {
    alphaPosition === 25 ? alphaPosition = 0 : alphaPosition++
    displayAlpha()
})

document.getElementById('display-letter').addEventListener('click', () => {
    changeDisplayLetter()
})

changeLetterInput.addEventListener('keyup', (event) => {
    const keyPressed = event.key

    if (keyPressed === 'Enter') {
        updateDisplayLetter(event)
    }
})

changeLetterInput.addEventListener('blur',(event) => {
    // invoke only if the blur occurs when the input is display
    if (!changeLetter.classList.contains("hidden")) {
        updateDisplayLetter(event)
    }
})

// Load page
init()