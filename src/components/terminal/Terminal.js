import React, {useState} from 'react'
import './Terminal.css'
import Slide from 'react-reveal/Slide';

export const Terminal = ( props ) => {

    let { handleClose } = props

    const [showIcon, setShowIcon] = useState(false)

    return(
        <div className='terminal-container'>
            <div className='terminal-top-bar'>
                <div
                    onClick={()=>{
                        handleClose()
                    }}
                    onMouseEnter={()=>{
                    setShowIcon(true)
                    }} 
                    onMouseLeave={()=>{
                    setShowIcon(false)
                    }} 
                    className='circle-button bg-red'>
                    {
                    showIcon &&
                    <img className='top-bar-icon close' src='./images/close.png' alt='#'/>
                    }
                </div>
                <div 
                    onMouseEnter={()=>{
                    setShowIcon(true)
                    }} 
                    onMouseLeave={()=>{
                    setShowIcon(false)
                    }} 
                    className='circle-button bg-yellow'>
                    {
                    showIcon &&
                    <img className='top-bar-icon minimize' src='./images/minimize.png' alt='#'/>
                    }
                </div>
                <div 
                onMouseEnter={()=>{
                    setShowIcon(true)
                    }} 
                    onMouseLeave={()=>{
                    setShowIcon(false)
                    }} 
                    className='circle-button bg-green'>
                    {
                    showIcon &&
                    <img className='top-bar-icon expand' src='./images/resize.png' alt='#'/>
                    }
                </div>
                <div className='top-bar-title'>
                    omerfarukose terminal
                </div>
            </div>
            <div className='terminal-body'>
                <p>getName()</p>
            </div>
        </div>
    )
}