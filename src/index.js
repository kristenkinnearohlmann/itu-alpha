const displayLetter = document.getElementById('display-letter')
const displayLetterImg = document.getElementById('display-letter-img')
const phoneticWord = document.getElementById('phonetic-word')
const pronunciation = document.getElementById('pronunciation')
const origYear = "2021"
let alphaPosition = 0

// Initialize functions
const init = () => {
    loadAlphaItems()
    displayAlpha()
}

// Function definitions
const loadAlphaItems = () => { 
    return alpha
}

const displayAlpha = () => {

    const currentLetter = new AlphaLetter(alpha[alphaPosition])

    displayLetter.textContent = currentLetter.letter
    // TODO: Move to class file
    if (currentLetter.symbolImgSrc) {
        displayLetterImg.innerHTML = `<div><img class="img-display-200 img-reduce" src="${currentLetter.symbolImgSrc}" /></div>`
    } else {
        displayLetterImg.innerHTML = '<div id="no-img"><span>No image available</span></div>'
    }
    
    phoneticWord.textContent = currentLetter.phoneticWord
    pronunciation.innerHTML = currentLetter.stressPronounce()

}

document.getElementById('arrow-left').addEventListener('click', () => {
    alphaPosition === 0 ? alphaPosition = 25 : alphaPosition--
    displayAlpha()
})

document.getElementById('arrow-right').addEventListener('click', () => {
    alphaPosition === 25 ? alphaPosition = 0 : alphaPosition++
    displayAlpha()
})

// Load page
init()