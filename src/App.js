import Navbar from './components/NavBar'
import './App.scss';

import {  Outlet } from "react-router-dom";
function App() {
  return (<>
  <div className="App">
      <Navbar/>

      <div className="content">
      <Outlet />
      </div>
    </div>
    <Navbar/>
   
        
    </>
  );
}

export default App;