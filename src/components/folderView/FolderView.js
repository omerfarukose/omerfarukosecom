import React, {useState, useContext} from 'react'
import './FolderView.css'
import { FileCard } from '../fileCard/FileCard'
import { ThreeCircle } from '../threeCircle/ThreeCircle'
import DisplayContext from '../../context/DisplayContext'

export const FolderView = ( props ) => {

    let { setDisplayFolder } = useContext(DisplayContext)

    const [showIcon, setShowIcon] = useState(false)

    return(
        <div className='folder-view'>
            <div className='folder-left-bar'>
                <ThreeCircle onCloseClick={() => {setDisplayFolder(false)}} showIcon={showIcon} onSetShowIcon={setShowIcon}/>
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