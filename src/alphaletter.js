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
        console.log(this._stressSyllable)
        const stressSyllableIndexed = this._stressSyllable.map(syllable => syllable-1)
        console.log(this._pronunciation.split('-'))
        this._pronunciation.split('-').map((segment, index) => {
            if (stressSyllableIndexed.includes(index)) {
                console.log('Stressed')
            } else {
                console.log('Unstressed')
            }
        })
        // return stressedWord
    }
}