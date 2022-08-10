import React, {useState} from 'react'
import './FolderView.css'
import { FileCard } from '../fileCard/FileCard'

export const FolderView = ( props ) => {

    let { handleClose } = props

    const [showIcon, setShowIcon] = useState(false)

    return(
        <div className='folder-view'>
            <div className='folder-left-bar'>
                <div className='folder-left-bar-circle-icons'>
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
                </div>
            </div>
            <div className='folder-right-container'>
                 <div className='folder-right-top-bar'>
                    Documents
                </div>
                <div className='folder-right-content'>
                    <FileCard fileImage={"./images/docs.png"} fileName={"cv.txt"} />
                </div>
            </div>
        </div>
    )
}