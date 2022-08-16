import React, { useContext } from 'react'
import './HomePage.css';
import { Desktop } from '../desktop/Desktop';
import { UserLogin } from '../userLogin/UserLogin';
import DisplayContext from '../../context/DisplayContext';

export const HomePage = () =>  {

  let { displayDesktop } = useContext(DisplayContext)
  
  console.log("App.js display desktop : ",displayDesktop);

  return (
      <div className="home-container">
        {
          displayDesktop ?
          
            <Desktop/>

            :
            
            <UserLogin/>

        }
      </div>    
  );
}
