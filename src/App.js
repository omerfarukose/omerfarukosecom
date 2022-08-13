import React, {useState} from 'react'
import './App.css';
import { Desktop } from './pages/desktop/Desktop';
import { UserLogin } from './pages/userLogin/UserLogin';

function App() {

  const [displayDesktop, setDisplayDesktop] = useState(true)

  return (
    <div className="app-container">
      {
        displayDesktop ?
        <Desktop
          onLockScreen={setDisplayDesktop}
        />
        :
        <UserLogin
          onLogin={setDisplayDesktop}
        />
      }

    </div>
  );
}

export default App;
