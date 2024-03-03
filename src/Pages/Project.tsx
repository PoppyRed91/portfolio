import { useParams } from "react-router-dom";
import { ProjectItem } from "../App";


 interface Prop {
        projectDetailed: ProjectItem[]
    }


export default function Project(prop: Prop) {
    /* Takes param from the link in ProjectCard which was defined in the router in the app and
       stores it in a variable.  */

    const {id} = useParams()

    return(
        <section className="project-page_wrapper">
            <article className="project_wrapper">
                <h1 className="project_name">{prop.projectDetailed[Number(id)].name}</h1>
                <img src={require(`../Assets/`+ prop.projectDetailed[Number(id)].image)} className="project_image"></img>
                <a href={prop.projectDetailed[Number(id)].link} target="_blank" className="project_link">Link to website</a>
            </article>
            <p className="project_description">{prop.projectDetailed[Number(id)].description}</p>
        </section>
    )
}

/* My param was a string, but I needed a number so I can reference an element from the array - Number() */