import React, {useState} from 'react'
import './App.css';
import { Terminal } from './components/terminal/Terminal';
import { FileCard } from './components/fileCard/FileCard';
import { Navbar } from './components/navbar/Navbar';
import { FolderView } from './components/folderView/FolderView';
import { Browser } from './components/browser/Browser';

function App() {

  const [showIcon, setShowIcon] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)
  const [showFolder, setShowFolder] = useState(false)
  const [showBrowser, setShowBrowser] = useState(false)
  const [displayDesktop, setDisplayDesktop] = useState(true)
  const [loginPasswordValue, setLoginPasswordValue] = useState("")

  const _renderDesktop = ( ) => {
    return(
      <div className='container'> 
        <Navbar onSetDisplayDesktop={setDisplayDesktop}/>
        {
          (!showFolder && !showTerminal && !showBrowser) &&
          <div >
            <FileCard
              fileName="Documents"
              onCardClick={()=>{
                setShowFolder(true)
              }}/>

            <FileCard 
              onCardClick={()=>{
                console.log("Card Clicked !")
                setShowTerminal(true)
              }} 
              imageStyle={{height:"60px",width:"60px"}}
              fileName="Terminal"
              fileImage={'./images/terminal.png'}/>

            <FileCard 
              onCardClick={()=>{
                console.log(" Browser card Clicked !")
                setShowBrowser(true)
              }} 
              imageStyle={{height:"50px",width:"50px"}}
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
      </div>
    )
  }

  const _renderUserLogin = ( ) => {
    return(
      <div className='login-container'>
        <img className='login-img' src="./images/bitmo-img.png" alt='#'/>
        <div className='login-user-title'>
          Ömer Faruk Köse
        </div>
        <input 
          onKeyDown={(event) => {
            console.log("on key down event key : ",event.key)
            if (event.key === 'Enter') {
              console.log("on key down true ")
              setDisplayDesktop(true)
            }
          }} 
          className='login-password-input' type="password" placeholder='Enter Password' value={loginPasswordValue} onChange={(event)=>{
            setLoginPasswordValue(event.target.value)
          }} />
      </div>
    )
  }

  return (
    <div className="app-container">
      {
        displayDesktop ?
        _renderDesktop()
        :
        _renderUserLogin()
      }

    </div>
  );
}

export default App;
