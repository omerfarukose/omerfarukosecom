import React, {useState} from 'react'
import './App.css';
import { Terminal } from './components/terminal/Terminal';
import { FileCard } from './components/fileCard/FileCard';
import { Navbar } from './components/navbar/Navbar';
import { FolderView } from './components/folderView/FolderView';

function App() {

  const [showIcon, setShowIcon] = useState(false)
  const [showTerminal, setShowTerminal] = useState(true)
  const [showFolder, setShowFolder] = useState(false)

  return (
    <div className="container">
      <Navbar/>

      {
        (!showFolder && !showTerminal) &&
        <div>
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
              console.log("Card Clicked !")
              setShowTerminal(true)
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
    </div>
  );
}

export default App;
