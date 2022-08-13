import React, {useState} from 'react'
import './FolderView.css'
import { FileCard } from '../fileCard/FileCard'
import { ThreeCircle } from '../threeCircle/ThreeCircle'

export const FolderView = ( props ) => {

    let { handleClose } = props

    const [showIcon, setShowIcon] = useState(false)

    return(
        <div className='folder-view'>
            <div className='folder-left-bar'>
                <ThreeCircle onCloseClick={handleClose} showIcon={showIcon} onSetShowIcon={setShowIcon}/>
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