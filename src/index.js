const displayLetter = document.getElementById('display-letter')
const changeLetter = document.getElementById('change-letter')
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

    document.getElementById('change-letter-input').placeholder = currentLetter.letter
    
    const changeLetterInput = document.getElementById('change-letter-input')
    
    changeLetterInput.focus()
    changeLetterInput.select()
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

document.getElementById('change-letter-input').addEventListener('keyup',(event) => {
    console.log(event)
})

// Load page
init()