import './App.css';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Pages/Homepage';
import ProjectsPage from './Pages/ProjectsPage';
import Project from './Pages/Project';
import AboutContactPage from './Pages/AboutContactPage';

export default function App() {
  return (
    <>
      <nav className="navbar_wrapper">
        <div className='navbar_home'>
          <Link to="/">
            <img src={require("./Assets/homepage.png")}className='navbar_home-logo'></img>
          </Link>
        </div>
        <div className='navbar_contact'>
          <img src={require("./Assets/mail.png")}></img>
          <img src={require("./Assets/linkedin.png")}></img>
          <img src={require("./Assets/github.png")}></img>
        </div>
      </nav>
      
      <Routes>
        <Route path='aboutandcontact' element={<AboutContactPage/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='projects' element={<ProjectsPage/>}></Route>
        <Route path='project/:id' element={<Project/>}></Route>
      </Routes>
      
    </>
  )
}
