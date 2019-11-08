import React from 'react'
import {container} from '../styles/lifes.module.scss'
import pose,{ PoseGroup } from 'react-pose'

const renderLifes = lifes => {
    let lifesArray = []
    for(let i = 0;i < lifes; i++){
        lifesArray.push(i)
    }

    return lifesArray
}

const Icon = pose.i({
    enter: { opacity: 1, transition: { type: 'spring' } },
    exit: { opacity: 0, transition: { type: 'spring' } }
})

const LifesContainer = ({lifes}) => {
    return (
        <div className={container}>
            <PoseGroup >
                {renderLifes(lifes).map(l => (<Icon className="fas fa-heart" key={l}></Icon>))}
            </PoseGroup>
        </div>
    )
}

export default LifesContainer