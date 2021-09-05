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

    styleStressSyllables() {
        console.log('Method: styleStressSyllables')
        return stressedWord
    }
}