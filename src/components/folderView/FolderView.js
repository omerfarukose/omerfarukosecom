import React, {useState, useContext} from 'react'
import './FolderView.css'
import { FileCard } from '../fileCard/FileCard'
import { ThreeCircle } from '../threeCircle/ThreeCircle'
import DisplayContext from '../../context/DisplayContext'
import { BsClock, BsPalette, BsBullseye, BsArrowDownCircle, BsBagDash, BsLaptop, BsFileEarmark } from "react-icons/bs";
import { FaPencilRuler } from "react-icons/fa";

export const FolderView = ( props ) => {

    let { setDisplayFolder } = useContext(DisplayContext)

    const [showIcon, setShowIcon] = useState(false)

    return(
        <div className='folder-view'>

            <div className='folder-left-bar'>

                <ThreeCircle onCloseClick={() => {setDisplayFolder(false)}} showIcon={showIcon} onSetShowIcon={setShowIcon}/>

                <div className='left-bar-title'>
                    Favorites
                </div>

                <div>

                    {/* airdrop */}
                    <div className='left-bar-item'>
                        <BsBullseye />
                        <div className='left-bar-item-text'>
                            AirDrop
                        </div>
                    </div>

                    {/* recents */}
                    <div className='left-bar-item'>
                        <BsClock />
                        <div className='left-bar-item-text'>
                            Recents
                        </div>
                    </div>  

                    {/* applications */}
                    <div className='left-bar-item'>
                        <BsBagDash />
                        <div className='left-bar-item-text'>
                            Applications
                        </div>
                    </div>   

                    {/* desktop */}
                    <div className='left-bar-item'>
                        <BsLaptop />
                        <div className='left-bar-item-text'>
                            Desktop
                        </div>
                    </div> 

                    {/* documents */}
                    <div className='left-bar-item'>
                        <BsFileEarmark />
                        <div className='left-bar-item-text'>
                            Documents
                        </div>
                    </div> 

                    {/* downloads */}
                    <div className='left-bar-item'>
                        <BsArrowDownCircle />
                        <div className='left-bar-item-text'>
                            Downloads
                        </div>
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