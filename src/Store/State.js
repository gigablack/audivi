import {createContext} from 'react'
import Board from '../GameObjects/Board'

export const GameBoard = new Board()

export const State = GameBoard.returnState()

export const Context = createContext()
