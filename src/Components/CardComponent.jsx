import React,{ useContext } from 'react'
import { toggleSelect, clearError, clearSuccess } from '../Store/Actions/ActionsCreators'
import {Context} from '../Store/State'
import {container, cardError, cardSuccess, cardSelected, cardNormal, cardDisabled} from '../styles/card.module.scss'
import Swal from 'sweetalert2'
import pose from 'react-pose'

const ButtonAnim = pose.button({
    rotateOn: { transform: 'rotateX(180deg)' },
    rotateOff: { transform: 'rotateX(0deg)' }
})

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
            {gameBoard.gameOver || gameBoard.playerVictory || !card.isPlayable ? (<button disabled onClick={handleClick} className={card.isSelected ? cardSelected : card.onError ? cardError : card.onSuccess ? cardSuccess : cardDisabled}><i className="fas fa-music"></i></button>) : (<ButtonAnim pose={card.onError || card.onSuccess || card.isSelected ? 'rotateOn' : 'rotateOff'} onClick={handleClick} className={card.isSelected ? cardSelected : card.onError ? cardError : card.onSuccess ? cardSuccess : cardNormal}>{card.onError || card.onSuccess || card.isSelected ? (<p style={{transform: 'rotateX(180deg)'}}>{card.name}</p>) : (<i className="fas fa-music"></i>)}</ButtonAnim>)}
        </div>
    )
}

export default CardView