import Navbar from './components/NavBar'
import './App.scss';

import {  Outlet } from "react-router-dom";
function App() {
  return (<>
    <Navbar/>
   
        
    <Outlet/>
    
    </>
  );
}

export default App;