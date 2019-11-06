import React,{ useReducer, useEffect, useState } from "react"
import { GameBoard, Context, State} from '../Store/State'
import reducer from '../Store/Reducer'
import CardView from '../Components/CardComponent.jsx'
import { loadCards, initGame } from '../Store/Actions/ActionsCreators'
import '../styles/global.scss'
import {container} from '../styles/index.module.scss'
import LifesContainer from '../Components/LifesContainer.jsx'
import Tone from 'tone'
import Swal from 'sweetalert2'

const data = ['C4','D4','E4','F4','G4','A4','B4']

const HomePage = () => {
    const [board,dispatch] = useReducer(reducer,State)
    const [synth] = useState(new Tone.Synth().toMaster())
    
    useEffect(()=>{
        if(!board.gameOver){
            dispatch(loadCards(data,GameBoard))
        }
        if(board.playerVictory){
            Swal.fire('Ganaste','','success')
            dispatch(initGame(GameBoard))
        }
    },[board.gameOver,board.playerVictory])
    return (
        <div className={container}>
            <Context.Provider value={{board,dispatch}}>
                <header>
                    <h1>Audivi</h1>
                    <LifesContainer lifes={board.lifes}/>
                </header>
                <main>
                    {board.cards.map((c,i) => (<CardView card={c} key={i} gameBoard={GameBoard} synth={synth}/>))}
                </main>
            </Context.Provider>
        </div>
    )
}

export default HomePage
