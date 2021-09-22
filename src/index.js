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

    // const currentLetter = new AlphaLetter(alpha[alphaPosition])
    currentLetter = new AlphaLetter(alpha[alphaPosition])

    displayLetter.textContent = currentLetter.letter
    displayLetterImg.innerHTML = currentLetter.renderLetterImg()
    
    phoneticWord.textContent = currentLetter.phoneticWord
    pronunciation.innerHTML = currentLetter.stressPronounce()

}

const changeDisplayLetter = () => {
    console.log('In changeLetter')
    console.log(currentLetter)
    console.log(displayLetter)
    displayLetter.classList.add("hidden")
    changeLetter.classList.remove("hidden")
    changeLetter.innerHTML = `<input type="text" value=${currentLetter.letter} />`
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

// Load page
init()