import React,{ useContext } from 'react'
import { toggleSelect, clearError, clearSuccess } from '../Store/Actions/ActionsCreators'
import {Context} from '../Store/State'
import {container, cardError, cardSuccess, cardSelected, cardNormal, cardDisabled} from '../styles/card.module.scss'
import Swal from 'sweetalert2'

const CardView = ({card,gameBoard,synth}) => {
    const {dispatch} = useContext(Context)
    if(card.onError) {
        setTimeout(()=>{
            dispatch(clearError(gameBoard))
        },500)
    }
    if(card.onSuccess){
        setTimeout(()=>{
            dispatch(clearSuccess(gameBoard))
        },500)
    }

    if(gameBoard.gameOver){
        Swal.fire('Perdiste','','error')
        gameBoard.initGame()
    }
    
    const handleClick = () => {
        dispatch(toggleSelect(card,gameBoard))
        synth.triggerAttackRelease(card.note,'8n')
    }

    return (
        <div className={container}>
            {gameBoard.gameOver || gameBoard.playerVictory || !card.isPlayable ? (<button disabled onClick={handleClick} className={card.isSelected ? cardSelected : card.onError ? cardError : card.onSuccess ? cardSuccess : cardDisabled}><i className="fas fa-music"></i></button>) : (<button onClick={handleClick} className={card.isSelected ? cardSelected : card.onError ? cardError : card.onSuccess ? cardSuccess : cardNormal}><i className="fas fa-music"></i></button>)}
        </div>
    )
}

export default CardView