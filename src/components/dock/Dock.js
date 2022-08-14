import React, {useState} from 'react'
import './Dock.css'
import Fade from 'react-reveal/Fade';
import { FileCard } from '../fileCard/FileCard';


export const Dock = ( props ) => {

  let { onFolderClick, onTerminalClick, onBrowserClick} = props;

    const [dockFolderAnimation, setDockFolderAnimation] = useState(false)
    const [dockTerminalAnimation, setDockTerminalAnimation] = useState(false)
    const [dockBrowserAnimation, setDockBrowserAnimation] = useState(false)

    return(
        <Fade bottom>
          <div className='dock-container'>

          <div
            onMouseEnter={() => {setDockFolderAnimation(true)}}
            onMouseLeave={() => {setDockFolderAnimation(false)}} >

            <FileCard
                onCardClick={()=>{
                  onFolderClick(true)
                }} 
                animation={dockFolderAnimation}
                imageStyle={{height:"43px",width:"43px"}}
            />

          </div>

          <div
            onMouseEnter={() => {setDockTerminalAnimation(true)}}
            onMouseLeave={() => {setDockTerminalAnimation(false)}} >

            <FileCard 
                onCardClick={()=>{
                  onTerminalClick(true)
                }}
                animation={dockTerminalAnimation}
                imageStyle={{height:"35px",width:"35px"}}
                fileImage={'./images/terminal.png'}/>

          </div>

          <div
            onMouseEnter={() => {setDockBrowserAnimation(true)}}
            onMouseLeave={() => {setDockBrowserAnimation(false)}} >

            <FileCard 
                onCardClick={()=>{
                  console.log("card cLicked !!^+!'^+!'^+")
                  onBrowserClick(true)
                }}
                animation={dockBrowserAnimation}
                imageStyle={{height:"30px",width:"30px"}}
                fileImage={'./images/safari.png'}/>

          </div>
            
        </div>
        </Fade>
    )
}