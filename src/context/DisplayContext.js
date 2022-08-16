import React, {createContext, useState} from 'react'

const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  
  const [displayDesktop, setDisplayDesktop] = useState(true)
  const [displayUserLogin, setDisplayUserLogin] = useState(false)
  const [displayRestart, setDisplayRestart] = useState(false)
  const [displayBrowser, setDisplayBrowser] = useState(false)
  const [displayTerminal, setDisplayTerminal] = useState(false)
  const [displayFolder, setDisplayFolder] = useState(false)

  const values = {
    displayDesktop,
    setDisplayDesktop,
    displayUserLogin,
    setDisplayUserLogin,
    displayRestart,
    setDisplayRestart,
    displayBrowser,
    setDisplayBrowser,
    displayTerminal,
    setDisplayTerminal,
    displayFolder,
    setDisplayFolder
  }

  return (
    <DisplayContext.Provider value={values}>
      {children}
    </DisplayContext.Provider>
  )
}

export default DisplayContext