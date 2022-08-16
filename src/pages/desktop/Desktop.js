import React, {useState,useContext} from 'react'
import './Desktop.css'
import { Navbar } from '../../components/navbar/Navbar'
import { FileCard } from '../../components/fileCard/FileCard'
import { Terminal } from '../../components/terminal/Terminal'
import { Browser } from '../../components/browser/Browser'
import { Dock } from '../../components/dock/Dock'
import { FolderView } from '../../components/folderView/FolderView'
import DisplayContext from '../../context/DisplayContext'

export const Desktop = ( props ) => {

  const { displayFolder, setDisplayFolder, displayBrowser, setDisplayBrowser, displayTerminal, setDisplayTerminal } = useContext(DisplayContext)

    const [showDock, setShowDock] = useState(false)

    return(
      <div className='container'> 
        <Navbar/>
        {
          (!displayFolder && !displayTerminal && !displayBrowser) &&
          <div style={{height:"100%", display:"flex",alignItems:"center", justifyContent:"center"}}>
            <FileCard
              containerStyle={{
                marginBottom:"10px"
              }}
              onCardClick={()=>{
                setDisplayFolder(true)
              }}
              useSelectBorder={true}
              fileName="Documents"
              onCardDoubleClick={()=>{
                setDisplayFolder(true)
              }}/>

            <FileCard 
              containerStyle={{
                marginBottom:"10px"
              }}
              onCardClick={()=>{
                setDisplayTerminal(true)
              }}
              useSelectBorder={true}  
              onCardDoubleClick={()=>{
                console.log("Card Clicked !")
                setDisplayTerminal(true)
              }} 
              imageStyle={{height:"50px",width:"50px"}}
              fileName="Terminal"
              fileImage={'./images/terminal.png'}/>

            <FileCard 
              containerStyle={{
                marginBottom:"10px",
              }}
              useSelectBorder={true} 
              onCardClick={()=>{
                setDisplayBrowser(true)
              }}
              onCardDoubleClick={()=>{
                console.log(" Browser card Clicked !")
                setDisplayBrowser(true)
              }} 
              imageStyle={{height:"50px",width:"50px"}}
              fileName="Browser"
              fileImage={'./images/safari.png'}/>
          </div>
        }

        {
          displayTerminal &&
            <Terminal handleClose={()=>{
              setDisplayTerminal(false)
            }}/>
        }

        {
          displayFolder &&
          <FolderView 
            handleClose={()=>{
              setDisplayFolder(false)
            }}/>
        }
        {
          displayBrowser &&
          <Browser 
            handleClose={()=>{
              setDisplayBrowser(false)
            }}/>
        }
        {
          showDock &&
          <Dock/>
        }
      </div>
    )
}