import React, {useState} from 'react'
import './Terminal.css'
import { ThreeCircle } from '../threeCircle/ThreeCircle'
export const Terminal = ( props ) => {

    let { handleClose } = props

    const [showIcon, setShowIcon] = useState(false)

    return(
        <div className='terminal-container'>
            <div className='terminal-top-bar'>
                <ThreeCircle onCloseClick={handleClose} showIcon={showIcon} onSetShowIcon={setShowIcon}/>
                <div className='top-bar-title'>
                    omerfarukose terminal
                </div>
            </div>
            <textarea className='terminal-body'>
                Hello there, this is some text in a text area
            </textarea>
        </div>
    )
}