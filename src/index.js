console.log('Hello world')

// Initialize functions
const init = () => {
    getAlphaItems()
}

// Function definitions
const getAlphaItems = () => {
    fetch('./assets/alpha.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

// Load page
init()