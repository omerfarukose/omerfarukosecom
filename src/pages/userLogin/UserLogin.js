import React, {useState, useContext, useEffect} from 'react'
import './UserLogin.css'
import DisplayContext from '../../context/DisplayContext'

export const UserLogin = ( props ) => {

  let { displayRestart, setDisplayRestart, setDisplayDesktop } = useContext(DisplayContext)

  const [loginPasswordValue, setLoginPasswordValue] = useState("")

  useEffect(() => {
    if(displayRestart){
      setTimeout(() => {
        setDisplayDesktop(true)
        setDisplayRestart(false)
      }, 2000);
    }
  }, [])

  return(
    <div className='login-container'>
      {
        displayRestart ?
        <lord-icon
          src="https://cdn.lordicon.com/qbeumxzm.json"
          trigger="loop"
          colors="primary:#ffffff,secondary:#08a88a"
          style={{
            width:"35vh",
            height:"35vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"}}>
          <img className='login-img' src="./images/bitmo-img.png" alt='#'/>
        </lord-icon>
        :
        <img className='login-img' src="./images/bitmo-img.png" alt='#' 
        style={{
          width:"30vh",
          height:"30vh"
        }}/>

      }
      
      <div className='login-user-title'>
        Ömer Faruk Köse
      </div>
      {
        !displayRestart &&
        <input 
        onKeyDown={(event) => {
          console.log("on key down event key : ",event.key)
          if (event.key === 'Enter') {
            console.log("on key down true ")
            setDisplayDesktop(true)
          }
        }} 
        className='login-password-input' 
        type="password" 
        placeholder='Enter Password' 
        value={loginPasswordValue} 
        onChange={(event)=>{
          setLoginPasswordValue(event.target.value)
        }} />
        }
    </div>
  )
}