import React, {useState,useContext} from 'react'
import './Navbar.css'
import { DropDownMenu } from '../DropDownMenu/DorpDownMenu'
import DisplayContext from '../../context/DisplayContext'
import { useEffect } from 'react'
import { GetNavbarDate } from '../../helper/Functions'

export const Navbar = ( props ) => {

    let { setDisplayDesktop, setDisplayRestart } = useContext(DisplayContext)

    const [date, setDate] = useState({});

    useEffect(() => {
        console.log("date : ", GetNavbarDate())
        setDate(GetNavbarDate());
    }, [])

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

            {
                date &&
                <div className='navbar-time'>
    
                    {date?.date + " " + date?.monthName + " " + date?.dayName + " " + date?.hour + ":" + date?.minutes}

                </div>
            }

        </div>
    )
}
