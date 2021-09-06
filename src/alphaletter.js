class AlphaLetter {
    constructor(data) {
        this._letter = data.letter
        this._phoneticWord = data.phonetic_word
        this._pronunciation = data.pronunciation
        this._stressSyllable = data.stress_syllable
        this._symbolImgSrc = data.symbol_img_src
    }

    get letter() {
        return this._letter
    }

    stressPronounce() {
        console.log('Method: stressPronounce')
        const stressSyllableIndexed = this._stressSyllable.map(syllable => syllable-1)

        console.log(this._pronunciation.split('-').map((segment, index) => {
            if (stressSyllableIndexed.includes(index)) {
                console.log('Stressed')
                console.log(`<em>${segment}</em>`)
                return `<em>${segment}</em>`
            } else {
                console.log('Unstressed')
                console.log(`${segment}`)
                return `${segment}`
            }
        }).join('-'))
        // return stressedWord
    }
}