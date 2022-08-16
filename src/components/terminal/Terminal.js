import React, {useState, useContext} from 'react'
import './Terminal.css'
import { ThreeCircle } from '../threeCircle/ThreeCircle'
import DisplayContext from '../../context/DisplayContext'

export const Terminal = ( props ) => {

    const { setDisplayTerminal } = useContext(DisplayContext)

    const [showIcon, setShowIcon] = useState(false)

    return(
        <div className='terminal-container'>
            <div className='terminal-top-bar'>
                <ThreeCircle onCloseClick={()=>{setDisplayTerminal(false)}} showIcon={showIcon} onSetShowIcon={setShowIcon}/>
                <div className='top-bar-title'>
                    omerfarukose terminal
                </div>
            </div>
            <textarea className='terminal-body'>
                Terminal functionality will be added soon.
            </textarea>
        </div>
    )
}