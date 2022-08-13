import React, {useState} from 'react'

export const UserLogin = ( props ) => {

    let { onLogin } = props

    const [loginPasswordValue, setLoginPasswordValue] = useState("")

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
              onLogin(true)
            }
          }} 
          className='login-password-input' 
          type="password" 
          placeholder='Enter Password' 
          value={loginPasswordValue} 
          onChange={(event)=>{
            setLoginPasswordValue(event.target.value)
          }} />
      </div>
    )
}