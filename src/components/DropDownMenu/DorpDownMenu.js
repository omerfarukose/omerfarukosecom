import React, {useState} from "react";
import "./DropDownMenu.css"

export const DropDownMenu = (props) => {

  let myMenuItems = []

  let { title, menuItems } = props;

  const [isHover, setIsHover] = useState(false)

  const [showMenuItems, setShowMenuItems] = useState(false)

  return (
        <div className="drop-down-menu">
            <div
                className="drop-down-menu-title"
                onClick={()=>{
                    setShowMenuItems(!showMenuItems)
                }}>
                {
                    props.children ?
                    props.children
                    :
                    title
                }
            </div>
            {
                showMenuItems &&
                <div
                    className="drop-down-menu-items"
                    >  
                        {menuItems.map((item, index) => {
                            console.log("index :",index)
                            console.log("menu length :",menuItems.length)
                            return(
                                <div
                                    className="drop-down-menu-item-container" >
                                    <div 
                                        onMouseEnter={() => {setIsHover(true)}}
                                        onMouseLeave={() => {setIsHover(false)}} 
                                        className={isHover ? "drop-down-menu-item-hover" :"drop-down-menu-item"} >
                                        {item}
                                    </div>
                                    {
                                        index !== menuItems.length -1 &&
                                        <div className="drop-down-menu-item-divider" />                                        
                                    }
                                </div>
                            )
                        })}
                </div>
            } 
        </div>
  )
};
