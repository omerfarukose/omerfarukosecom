import React from 'react' 
import './ThreeCircle.css'

export const ThreeCircle = ( props ) => {

    let { showIcon, onCloseClick, onMinimizeClick, onExpandClick, onSetShowIcon } = props

    return(
        <div className='circle-button-items'>
            <div
                onClick={onCloseClick}
                onMouseEnter={()=>{
                    onSetShowIcon(true)
                }} 
                onMouseLeave={()=>{
                    onSetShowIcon(false)
                }} 
                className='circle-button-item bg-red'>
                {
                    showIcon &&
                    <img className='close-img' src='./images/close.png' alt='#'/>
                }
            </div>
            <div 
                onClick={onMinimizeClick}
                onMouseEnter={()=>{
                    onSetShowIcon(true)
                }} 
                onMouseLeave={()=>{
                    onSetShowIcon(false)
                }} 
                className='circle-button-item bg-yellow'>
                {
                    showIcon &&
                    <img className='minimize-img' src='./images/minimize.png' alt='#'/>
                }
            </div>
            <div 
                onClick={onExpandClick}
                onMouseEnter={()=>{
                    onSetShowIcon(true)
                }} 
                onMouseLeave={()=>{
                    onSetShowIcon(false)
                }} 
                className='circle-button-item bg-green'>
                {
                    showIcon &&
                    <img className='expand-img' src='./images/resize.png' alt='#'/>
                }
            </div>
        </div>
    )
}