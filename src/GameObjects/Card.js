class Card {
    constructor(note,index){
        this.note = note
        this.isSelected = false
        this.index = index
        this.onError = false
        this.onSuccess = false
        this.isPlayable = true
    }

    select = () => this.isSelected = true

    unSelect = () => this.isSelected = false

    setOnError = () => this.onError = true

    clearOnError = () => this.onError = false

    setOnSuccess = () => this.onSuccess = true

    clearOnSuccess = () => this.onSuccess = false

    deactivate = () => this.isPlayable = false

    activate = () => this.isPlayable = true

    toggleSelect = () => {
        if(this.isSelected){
           return this.unSelect()
        } else {
           return this.select()
        }
    }
}

export default Card