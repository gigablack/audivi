const _toggleSelect = (state,board,card) => {
    if(state.cardSelected === null){
        //Agregar carta
        card.select()
        board.selectCard(card)
        return board.returnState()
    } else if(state.cardSelected.note === card.note && state.cardSelected.index !== card.index){
        //sumar puntos
        state.cardSelected.setOnSuccess()
        card.setOnSuccess()
        board.addScore()
        board.unSelectAllCards()
        board.selectCard(null)
        return board.returnState()
    } else if(state.cardSelected.index === card.index){
        board.selectCard(null)
        card.unSelect()
        return board.returnState()
    } else {
        //error
        state.cardSelected.setOnError()
        card.setOnError()
        board.subScore()
        board.unSelectAllCards()
        board.resetScore()
        board.subLifes()
        board.selectCard(null)
        return board.returnState()
    }
}

export default _toggleSelect