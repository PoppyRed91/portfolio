import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <main className="homepage_wrapper">
                    <h1 className="homepage_title">Petra Cuturdic</h1>
                    <h2 className="homepage_description">Frontend Developer based in Stockholm.</h2>
                    <h3 className="homepage_navigation">
                        <Link to="projects" className="homepage_projects">Projects</Link>
                        <Link to="aboutandcontact" className="homepage_contact">About & Contact</Link>
                    </h3>
            </main>
        </>
    )
}