import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Homepage from './Pages/Homepage';
import ProjectsPage from './Pages/ProjectsPage';
import AboutContactPage from './Pages/AboutContactPage';


/* Blueprint for creating instances of my projects from json file */

export class ProjectItem {
  id?: string;
  name?: string;
  image?: string;
  link?: string;
  description?: string;

  constructor(id:string, name:string, image:string, link:string, description:string) {
    this.id = id; this.name = name; this.image = image; this.link = link; this.description = description;
  }
}

export default function App() {
 

  let data = require("./projects.json");
  let arrayOfProjects: ProjectItem[] = []

  /*Array which containes all instances of my projects and are ProjectItem type */
  /*Loop through json file and push all projects and their content to arrayOfProjects */

  for (let i of data) {
    arrayOfProjects.push(new ProjectItem(i.id, i.name, i.image, i.link, i.description))
  }
  

  return (
    <>
      <nav className="navbar_wrapper">
        <div className='navbar_home'>
          <Link to="/">
            <img src={require("./Assets/homepage.png")} className='navbar_home-logo' alt="Homepage logo"></img>
          </Link>
        </div>
        <div className='navbar_contact'>
          <Link to="mailto:petra@cuturdic.com"><img src={require("./Assets/mail.png")} className='navbar_contact-img' alt="E-mail logo"></img></Link>
          <Link to="https://www.linkedin.com/in/petra-cuturdic/" target="_blank"><img src={require("./Assets/linkedin.png")} className='navbar_contact-img' alt="LinkedIn logo"></img></Link>
          <Link to="https://github.com/PoppyRed91" target="_blank"><img src={require("./Assets/github.png")} className='navbar_contact-img' alt="GitHub logo"></img></Link>
        </div>
      </nav>
      
      <Routes>
        <Route path='aboutandcontact' element={<AboutContactPage/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='projects' element={<ProjectsPage projectsDetailed={arrayOfProjects}/>}></Route>
      </Routes>
      
    </>
  )
}

