import React, {useState} from "react";
import "./DropDownMenu.css"

export const DropDownMenu = (props) => {

    const [showMenuItems, setShowMenuItems] = useState(false)

    return (
        <div className="drop-down-menu">
            <div
                className="drop-down-menu-title"
                onClick={()=>{
                    setShowMenuItems(!showMenuItems)
                }}>

                <img className='drop-down-logo' src='./images/apple.png' alt='#'/>
                
            </div>
            {
                showMenuItems &&
                <div className="drop-down-menu-items"
                    >  
                    {
                        props.children &&
                        props.children
                    }
                </div>
            } 
        </div>
    )
};
