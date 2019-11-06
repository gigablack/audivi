const _clearSuccess = (board) => {
    board.deactivateCard()
    board.hasPlayerWon()
    return board.returnState()
}

export default _clearSuccess