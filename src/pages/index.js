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
import Helmet from 'react-helmet'

const data = [{note: 'C4',name: 'Do'},{note: 'D4',name: 'Re'},{note: 'E4',name: 'Mi'},{note: 'F4',name:'Fa'},{note: 'G4',name:'Sol'},{note: 'A4',name:'La'},{note: 'B4',name: 'Si'}]

const HomePage = () => {
    const [board,dispatch] = useReducer(reducer,State)
    const [synth,setSynth] = useState(null)
    
    useEffect(()=>{
        if(!board.gameOver){
            dispatch(loadCards(data,GameBoard))
        }
        if(board.playerVictory){
            Swal.fire('Ganaste','','success')
            dispatch(initGame(GameBoard))
        }
        setSynth(new Tone.Synth().toMaster())
    },[board.gameOver,board.playerVictory])
    return (
        <div className={container}>
            <Helmet title="Audivi" defer={false}/>
            <Context.Provider value={{board,dispatch}}>
                <header>
                    <img src="audivi_logo.png" alt="logo"/>
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
