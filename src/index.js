const displayLetter = document.getElementById('display-letter')

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
}

// Load page
init()