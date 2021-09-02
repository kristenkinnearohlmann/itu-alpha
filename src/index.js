const displayLetter = document.getElementById('display-letter')
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
    phoneticWord.textContent = alpha[0].phonetic_word
    pronunciation.textContent = alpha[0].pronunciation
}

// Load page
init()