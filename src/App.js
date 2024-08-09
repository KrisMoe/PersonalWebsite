
import {  Outlet } from "react-router-dom";
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar.jsx'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="content">
      <Outlet />
      </div>
    </div>
  );
}


export default App;
