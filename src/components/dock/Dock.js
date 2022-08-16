import React, {useState, useContext} from 'react'
import './Dock.css'
import Fade from 'react-reveal/Fade';
import { FileCard } from '../fileCard/FileCard';
import DisplayContext from '../../context/DisplayContext';

export const Dock = ( props ) => {

  const { setDisplayFolder, setDisplayBrowser, setDisplayTerminal } = useContext(DisplayContext)

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
                  setDisplayFolder(true)
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
                  setDisplayTerminal(true)
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
                  setDisplayBrowser(true)
                }}
                animation={dockBrowserAnimation}
                imageStyle={{height:"30px",width:"30px"}}
                fileImage={'./images/safari.png'}/>

          </div>
            
        </div>
        </Fade>
    )
}