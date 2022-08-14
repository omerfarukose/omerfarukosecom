import React, {useState} from 'react'
import './Desktop.css'
import { Navbar } from '../../components/navbar/Navbar'
import { FileCard } from '../../components/fileCard/FileCard'
import { Terminal } from '../../components/terminal/Terminal'
import { Browser } from '../../components/browser/Browser'
import { Dock } from '../../components/dock/Dock'
import { FolderView } from '../../components/folderView/FolderView'

export const Desktop = ( props ) => {

    let { onLockScreen } = props

    const [showTerminal, setShowTerminal] = useState(false)
    const [showFolder, setShowFolder] = useState(false)
    const [showBrowser, setShowBrowser] = useState(false)
    const [showDock, setShowDock] = useState(false)

    return(
      <div className='container'> 
        <Navbar onSetDisplayDesktop={onLockScreen}/>
        {
          (!showFolder && !showTerminal && !showBrowser) &&
          <div style={{height:"100%", display:"flex",alignItems:"center", justifyContent:"center"}}>
            <FileCard
              containerStyle={{
                marginBottom:"10px"
              }}
              useSelectBorder={true}
              fileName="Documents"
              onCardDoubleClick={()=>{
                setShowFolder(true)
              }}/>

            <FileCard 
              containerStyle={{
                marginBottom:"10px"
              }}
              useSelectBorder={true}  
              onCardDoubleClick={()=>{
                console.log("Card Clicked !")
                setShowTerminal(true)
              }} 
              imageStyle={{height:"50px",width:"50px"}}
              fileName="Terminal"
              fileImage={'./images/terminal.png'}/>

            <FileCard 
              containerStyle={{
                marginBottom:"10px"
              }}
              useSelectBorder={true}  
              onCardDoubleClick={()=>{
                console.log(" Browser card Clicked !")
                setShowBrowser(true)
              }} 
              imageStyle={{height:"42px",width:"42px"}}
              fileName="Browser"
              fileImage={'./images/safari.png'}/>
          </div>
        }

        {
          showTerminal &&
            <Terminal handleClose={()=>{
              setShowTerminal(!setShowTerminal)
            }}/>
        }

        {
          showFolder &&
          <FolderView 
            handleClose={()=>{
              setShowFolder(!showFolder)
            }}/>
        }
        {
          showBrowser &&
          <Browser 
            handleClose={()=>{
              setShowBrowser(!showBrowser)
            }}/>
        }
        {
          showDock &&
          <Dock onFolderClick={setShowFolder} onTerminalClick={setShowTerminal} onBrowserClick={setShowBrowser}/>
        }
      </div>
    )
}