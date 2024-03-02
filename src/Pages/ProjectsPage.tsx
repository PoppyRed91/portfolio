import { ProjectItem } from "../App";
import ProjectCard from "../Components/ProjectCard";

/* ProjectsPage will contain preview of all my projects - in shape of ProjectCard
   ProjectCard needs following props: projectsDetailed.
   
   ProjectsPage needs prop projectsDetailed that is type of ProjectItem

   ProjectItem is imported from App.tsx
   ProjectItem is type of the array that contains info about all my projects from json file */

interface Prop {
    projectsDetailed: ProjectItem[];
}

export default function ProjectsPage(prop: Prop) {

    /*I have to map projectsDetailed array, I loop through every item in array and return
    ProjectCard which has props imageSrc and projectTitle. I pass correct project to the project card */

    return(
        <>
            <section className="projects_wrapper">
                {prop.projectsDetailed.map(i => {
                    return(<ProjectCard projectDetailed={i} key={i.id}></ProjectCard>)
                })};
            </section>
        </>
    )
}