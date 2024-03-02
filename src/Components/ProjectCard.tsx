import { Link } from "react-router-dom"
import { ProjectItem } from "../App"

/* ProjectCard is a preview of a project that contains image and title.
   image and name are accessed through props.projectDetailed
   ProjectCard will be passed to ProjectsPage */

interface Props {
    projectDetailed: ProjectItem
}


export default function ProjectCard(props: Props) {
    return(

        <>
            <img src={require(`../Assets/`+ props.projectDetailed.image)} className="projects_image" alt="image"></img>
            <Link to={"/project/"+ props.projectDetailed.id} className="projects_project-name">{props.projectDetailed.name}</Link>
        </>
    )
}
