import React,{useState} from 'react'
import './FileCard.css'
import Tada from 'react-reveal/Tada';

export const FileCard = ( props ) => {

    let { fileImage, fileName, imageStyle, onCardClick, onCardDoubleClick, animation, useSelectBorder, containerStyle } = props

    const [isCardSelected, setIsCardSelected] = useState(false)

    return(
        <div style={containerStyle}>

            {
            animation ?

                <Tada>
                    <div 
                        onClick={onCardClick}
                        onDoubleClick={onCardClick ? onCardClick : null}
                        className={isCardSelected ? "file-card-selected" : "file-card"}>

                        <img className='folder-image' src={fileImage ? fileImage : './images/folder.png'} alt='#' style={imageStyle}/>

                        <div className='file-name'>

                            {fileName}

                        </div>

                    </div>
                </Tada>

            :

                <div 
                    onClick={onCardClick}
                    onDoubleClick={onCardDoubleClick}
                    className={isCardSelected ? "file-card-selected" : "file-card"}>

                    <img className='folder-image' src={fileImage ? fileImage : './images/folder.png'} alt='#' style={imageStyle}/>

                    <div className='file-name'>

                        {fileName}

                    </div>

                </div>

        }

        </div>
        
    )
}