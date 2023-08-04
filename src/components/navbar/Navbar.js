import React, {useState,useContext} from 'react'
import './Navbar.css'
import { DropDownMenu } from '../DropDownMenu/DorpDownMenu'
import DisplayContext from '../../context/DisplayContext'

export const Navbar = ( props ) => {

    let { setDisplayDesktop, setDisplayRestart } = useContext(DisplayContext)

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    const d = new Date();
    let date = d.getDate();
    let dayName = weekday[d.getDay()];
    let monthName = month[d.getMonth()];
    let hour = d.getHours() < 10 ? "0"+d.getHours() : d.getHours();
    let minutes = d.getMinutes()  < 10 ? "0"+d.getMinutes() : d.getMinutes();;

    const [isHoverAbout, setIsHoverAbout] = useState(false)
    const [isHoverRestart, setIsHoverRestart] = useState(false)
    const [isHoverShutDown, setIsHoverShutDown] = useState(false)
    const [isHoverLockScreen, setIsHoverLockScreen] = useState(false)

    return(
        <div className='navbar'>
            <DropDownMenu className="navbar-drop-down" title={"test title"} menuItems={["Restart...","Shut Down..."]} >
                
                <div
                    onMouseEnter={() => {setIsHoverAbout(true)}}
                    onMouseLeave={() => {setIsHoverAbout(false)}}
                    className={isHoverAbout ? "drop-down-menu-item-hover" :"drop-down-menu-item"} >
                    About This Mac...
                </div>
                <div className="drop-down-menu-item-divider" />

                <div
                    onClick={()=>{
                        setDisplayRestart(true)
                        setDisplayDesktop(false)
                    }}
                    onMouseEnter={() => {setIsHoverRestart(true)}}
                    onMouseLeave={() => {setIsHoverRestart(false)}}
                    className={isHoverRestart ? "drop-down-menu-item-hover" : "drop-down-menu-item"} >
                    Restart...
                </div>
                

                <div
                    onClick={()=>{
                        console.log("Shut Down Clicked !")
                    }}
                    onMouseEnter={() => {setIsHoverShutDown(true)}}
                    onMouseLeave={() => {setIsHoverShutDown(false)}}
                    className={isHoverShutDown ? "drop-down-menu-item-hover" :"drop-down-menu-item"} >
                    Shut Down...
                </div>

                <div className="drop-down-menu-item-divider" />

                <div
                    onClick={()=>{
                        setDisplayDesktop(false)
                    }}
                    onMouseEnter={() => {setIsHoverLockScreen(true)}}
                    onMouseLeave={() => {setIsHoverLockScreen(false)}}
                    className={isHoverLockScreen ? "drop-down-menu-item-hover" :"drop-down-menu-item"} >
                    Lock Screen
                </div>
            
            </DropDownMenu>
            <div className='navbar-time'>
                {date + " " + monthName + " " + dayName + " " + hour+":"+minutes}
            </div>
        </div>
    )
}
