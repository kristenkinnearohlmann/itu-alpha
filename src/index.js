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
    console.log('In changeDisplayLetter')
    console.log(displayLetter.classList)
    console.log(changeLetter.classList)
    displayLetter.classList.add("hidden")
    changeLetter.classList.remove("hidden")

    changeLetterInput.placeholder = currentLetter.letter
      
    changeLetterInput.focus()
    changeLetterInput.select()
}

const updateDisplayLetter = (event) => {
    console.log('Update display letter')
    console.log(currentLetter)
    const newLetter = event.target.value.toUpperCase()
    console.log(newLetter)
    console.log(alpha.map(element => element.letter))
    const newLetterPosition = alpha.map(element => element.letter).indexOf(event.target.value.toUpperCase())
    console.log(alpha[newLetterPosition])
    alphaPosition = newLetterPosition

    changeLetterInput.placeholder = newLetter
    changeLetter.classList.add("hidden")
    displayLetter.classList.remove("hidden")
    displayAlpha()

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
    console.log('Clicked letter to change')
    changeDisplayLetter()
})

changeLetterInput.addEventListener('keyup', (event) => {
    console.log('Changeletter keyup')
    const keyPressed = event.key

    if (keyPressed === 'Enter') {
        updateDisplayLetter(event)
    }
})

changeLetterInput.addEventListener('blur',(event) => {
    console.log('Change letter focus out')
    updateDisplayLetter(event)
})

// Load page
init()