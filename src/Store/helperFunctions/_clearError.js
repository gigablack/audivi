const _clearError = (board) => {
    board.clearAllError()
    board.isGameOver()
    return board.returnState()
}

export default _clearError