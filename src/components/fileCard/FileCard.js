import React,{useState} from 'react'
import './FileCard.css'

export const FileCard = ( props ) => {

    let { fileImage, fileName, imageStyle, onCardClick } = props

    const [isCardSelected, setIsCardSelected] = useState(false)

    let selectedCardClass = "file-card selected"

    let nonSelectedCardClass = "file-card"

    console.log("File image : ",fileImage);
    console.log("on card click : ",onCardClick);

    return(
        <div 
            onClick={()=>{
                setIsCardSelected(!isCardSelected)
            }}
            onDoubleClick={onCardClick ? onCardClick : null}
            className={isCardSelected ? "file-card-selected" : "file-card"}>
            {
                fileImage ?
                <img className='folder-image' src={fileImage} alt='#' style={imageStyle}/>
                :
                <img className='folder-image-default' src='./images/folder.png' alt='#'/>
            } 
            {
                fileName ?
                <div className='file-name'>
                    {fileName}
                </div>
                :
                <div className='file-name'>
                    Folder
                </div>
            }
            
        </div>
    )
}