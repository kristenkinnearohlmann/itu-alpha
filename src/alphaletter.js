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

    get phoneticWord() {
        return this._phoneticWord
    }

    get symbolImgSrc() {
        return this._symbolImgSrc
    }

    stressPronounce() {
        const stressSyllableIndexed = this._stressSyllable.map(syllable => syllable-1)

        return this._pronunciation.split('-').map((segment, index) => {
            if (stressSyllableIndexed.includes(index)) {
                return `<em>${segment}</em>`
            } else {
                return `${segment}`
            }
        }).join('-')
    }

    renderLetterImg() {
        if (this.symbolImgSrc) {
            return `<div><img class="img-display-200 img-reduce" src="${this.symbolImgSrc}" /></div>`
        } else {
            return '<div id="no-img"><span>No image available</span></div>'
        }
    }
}