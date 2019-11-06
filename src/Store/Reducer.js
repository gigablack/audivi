import { 
    TOGGLE_SELECT,
    LOAD_CARDS,
    CLEAR_ERROR,
    CLEAR_SUCCESS,
    INIT_GAME
 } from './Actions/Actions'
import _toggleSelect from './helperFunctions/_toggleSelect'
import _loadCards from './helperFunctions/_loadCards'
import _clearError from './helperFunctions/_clearError'
import _clearSuccess from './helperFunctions/_clearSuccess'
import _initGame from './helperFunctions/_initGame'


const reducer = (state,action) => {
    switch(action.type){
        case TOGGLE_SELECT:
            return _toggleSelect(state,action.board,action.card)
        case LOAD_CARDS:
            return _loadCards(action.cards,action.board)
        case CLEAR_ERROR:
            return _clearError(action.board)
        case CLEAR_SUCCESS:
            return _clearSuccess(action.board)
        case INIT_GAME:
            return _initGame(action.board)
        default:
            return state
    }
}

export default reducer