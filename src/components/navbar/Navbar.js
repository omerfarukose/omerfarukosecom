import React from 'react'
import './Navbar.css'
import { DropDownMenu } from '../DropDownMenu/DorpDownMenu'

export const Navbar = ( ) => {

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = d.getDay();
    let date = d.getDate();
    let dayName = weekday[d.getDay()];
    let monthName = month[d.getMonth()];
    let hour = d.getHours();
    let minutes = d.getMinutes();

    return(
        <div className='navbar'>
            <DropDownMenu className="navbar-drop-down" title={"test title"} menuItems={["Restart...","Shut Down..."]} >
                <img className='navbar-logo' src='./images/pear-logo.png' alt='#'/>     
            </DropDownMenu>
            <div className='navbar-time'>
                {date + " " + monthName + " " + dayName + " " + hour+":"+minutes}
            </div>
        </div>
    )
}