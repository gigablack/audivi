import React from 'react'
import {container} from '../styles/lifes.module.scss'

const renderLifes = lifes => {
    let lifesArray = []
    for(let i = 0;i < lifes; i++){
        lifesArray.push(i)
    }

    return lifesArray
}

const LifesContainer = ({lifes}) => {
    return (
        <div className={container}>{renderLifes(lifes).map(l => (<i className="fas fa-heart" key={l}></i>))}</div>
    )
}

export default LifesContainer