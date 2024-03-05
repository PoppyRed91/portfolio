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
            <section className="project-card_wrapper">
                <h2 className="project-card_name">{props.projectDetailed.name}</h2>
                <p className="project-card_description">{props.projectDetailed.description}</p>
                <img src={require(`../Assets/`+ props.projectDetailed.image)} className="project-card_image" alt="image"></img>
                <a href={props.projectDetailed.link} className="project-card_link">Link to website</a>
            </section>
            
        </>
    )
}
