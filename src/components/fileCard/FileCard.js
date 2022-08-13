import React,{useState} from 'react'
import './FileCard.css'

export const FileCard = ( props ) => {

    let { fileImage, fileName, imageStyle, onCardClick } = props

    const [isCardSelected, setIsCardSelected] = useState(false)

    return(
        <div 
            onClick={()=>{
                setIsCardSelected(!isCardSelected)
            }}
            onDoubleClick={onCardClick ? onCardClick : null}
            className={isCardSelected ? "file-card-selected" : "file-card"}>

            <img className='folder-image' src={fileImage ? fileImage : './images/folder.png'} alt='#' style={imageStyle}/>

            <div className='file-name'>

                {fileName ? fileName : "Folder"}

            </div>

        </div>
    )
}