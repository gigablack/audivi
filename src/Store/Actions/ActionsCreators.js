import { 
    TOGGLE_SELECT,
    LOAD_CARDS,
    CLEAR_ERROR,
    CLEAR_SUCCESS,
    INIT_GAME
 } from './Actions'

export const toggleSelect = (card,board) => {
    return {
        type: TOGGLE_SELECT,
        card,
        board
    }
}

export const loadCards = (cards,board) => {
    return {
        type: LOAD_CARDS,
        cards,
        board
    }
}

export const clearError = (board) => {
    return {
        type: CLEAR_ERROR,
        board
    }
}

export const clearSuccess = (board) => {
    return {
        type: CLEAR_SUCCESS,
        board
    }
}

export const initGame = (board) => {
    return {
        type: INIT_GAME,
        board
    }
}