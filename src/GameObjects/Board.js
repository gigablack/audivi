import Card from './Card'

class Board {
    constructor(){
        this.cards = []
        this.cardsPlayed = 0
        this.cardSelected = null
        this.score = 0
        this.cardIndex = 0
        this.lifes = 10
        this.gameOver = false
        this.playerVictory = false 
    }

    indexUp = () => this.cardIndex++

    returnState = () => {
        return {
            cards: this.cards,
            cardSelected: this.cardSelected,
            score: this.score,
            cardIndex: this.cardIndex,
            lifes: this.lifes,
            gameOver: this.gameOver,
            playerVictory: this.playerVictory,
            cardsPlayed: this.cardsPlayed
        }
    }

    sortCards = () => {
        let tempArray = [...this.cards]
        this.cards = []
        while(tempArray.length > 0){
            this.cards.push(tempArray.splice(Math.floor(Math.random()*tempArray.length),1)[0])
        }
    }

    clearAllError = () => {
        this.cards.map(c => {
            c.clearOnError()
            return c
        })
    }

    unSelectAllCards = () => {
        this.cards = this.cards.map(c => {
            c.unSelect()
            return c
        })
    }

    addCard = (card) => {
        const {note,name} = card
        this.cards.push(new Card(note,name,this.cardIndex))
        this.indexUp()
        this.cards.push(new Card(note,name,this.cardIndex))
        this.indexUp()
    }

    dropCards = () => this.cards = []

    deactivateCard = () => {
        this.cards = this.cards.map(c => {
            if(c.onSuccess){
                c.deactivate()
                c.clearOnSuccess()
                this.cardsPlayed++
            }
            return c
        })
    }

    addScore = () => {
        if(this.score >= 4){
            this.score = 0
            this.lifes++
        } else {
            this.score++
        }
    }

    subScore = () => {
        if(this.score <= 0){
            this.score = 0
        } else {
            this.score--
        }
    }

    resetScore = () => this.score = 0

    resetLifes = () => this.lifes = 10

    subLifes = () => {
        this.lifes--
    }

    setGameOver = () => this.gameOver = true

    unSetGameOver = () => this.gameOver = false

    setVictory = () => this.playerVictory = true

    unSetVictory = () => this.playerVictory = false

    resetCardsPlayed = () => this.cardsPlayed = 0

    initGame = () => {
        this.unSetGameOver()
        this.resetScore()
        this.resetLifes()
        this.unSetVictory()
        this.resetCardsPlayed()
        this.cardSelected = null
    }

    isGameOver = () => {
        if(this.lifes < 1){
            //Game over
            this.lifes = 0
            this.setGameOver()
        }
    }

    hasPlayerWon = () => {
        if(this.cards.length === this.cardsPlayed){
            this.setVictory()
        }
    }

    selectCard = card => {
        this.cardSelected = card
    }
}

export default Board