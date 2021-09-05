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
    // TODO: Update logic to check for image source null
    if (1 === 0) {
        displayLetterImg.innerHTML = '<div><img src="" /></div>'
    } else {
        displayLetterImg.innerHTML = '<div id="no-img"><span>No image available</span></div>'
    }
    
    phoneticWord.textContent = alpha[0].phonetic_word
    pronunciation.textContent = alpha[0].pronunciation

    stressPronounce(alpha[0].pronunciation, alpha[0].stress_syllable)
}

const stressPronounce = (pronunciation, stress_syllable) => {
    console.log(alpha[0].stress_syllable)
    console.log(alpha[0].pronunciation.split('-'))
}

// Load page
init()