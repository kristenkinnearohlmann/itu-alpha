const displayLetter = document.getElementById('display-letter')
const displayLetterImg = document.getElementById('display-letter-img')
const phoneticWord = document.getElementById('phonetic-word')
const pronunciation = document.getElementById('pronunciation')

// Initialize functions
const init = () => {
    console.log('Starting ITU Alphabet')
    loadAlphaItems()
    displayInitialAlpha()
}

// Function definitions
const loadAlphaItems = () => {
    console.log(alpha)    
    return alpha
}

const displayInitialAlpha = () => {
    console.log('Display function')
    console.log(alpha[0])
    displayLetter.textContent = alpha[0].letter
    displayLetterImg.innerHTML = '<img src="">'
    phoneticWord.textContent = alpha[0].phonetic_word
    pronunciation.textContent = alpha[0].pronunciation
    console.log(alpha[0].stress_syllable)
    console.log(alpha[0].pronunciation.split('-'))
}

// Load page
init()