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

    const currentLetter = new AlphaLetter(alpha[20])
    console.log(currentLetter)

    displayLetter.textContent = currentLetter.letter
    // TODO: Move to class file
    if (currentLetter.symbolImgSrc) {
        displayLetterImg.innerHTML = `<div><img class="img-display-200" src="${currentLetter.symbolImgSrc}" /></div>`
    } else {
        displayLetterImg.innerHTML = '<div id="no-img"><span>No image available</span></div>'
    }
    
    phoneticWord.textContent = currentLetter.phoneticWord
    pronunciation.innerHTML = currentLetter.stressPronounce()

}

// Load page
init()