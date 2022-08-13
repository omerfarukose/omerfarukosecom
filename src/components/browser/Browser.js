import React, {useState} from 'react'
import './Browser.css'
import { ThreeCircle } from '../threeCircle/ThreeCircle'

export const Browser = ( props ) => {

    let { handleClose } = props

    const [showIcon, setShowIcon] = useState(false)

    return(
        <div className='browser-container'>
            <div className='browser-top-bar'>
                <ThreeCircle onCloseClick={handleClose} showIcon={showIcon} onSetShowIcon={setShowIcon}/>
            </div>
        </div>
    )
}