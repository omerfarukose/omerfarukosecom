import React from 'react'
import './App.css';
import { DisplayProvider } from './context/DisplayContext';
import { HomePage } from './pages/home/HomePage';

function App() {  
  return (
    <DisplayProvider>
        <HomePage/>
    </DisplayProvider>
    
  );
}

export default App;
