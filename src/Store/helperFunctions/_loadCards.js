const _loadCards = (cards,board) => {
    board.dropCards()
    cards.forEach(c => board.addCard(c))
    board.sortCards()
    return board.returnState()
}

export default _loadCards