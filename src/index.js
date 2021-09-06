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
    console.log(alpha[9])

    const currentLetter = new AlphaLetter(alpha[9])
    console.log(currentLetter)
    console.log(currentLetter.stressPronounce())

    displayLetter.textContent = alpha[9].letter
    // TODO: Update logic to check for image source null
    if (alpha[9].symbol_img_src) {
        displayLetterImg.innerHTML = `<div><img class="img-display-200" src="${alpha[9].symbol_img_src}" /></div>`
    } else {
        displayLetterImg.innerHTML = '<div id="no-img"><span>No image available</span></div>'
    }
    
    phoneticWord.textContent = alpha[9].phonetic_word
    // pronunciation.textContent = alpha[9].pronunciation
    pronunciation.innerHTML = currentLetter.stressPronounce()

}

// Load page
init()