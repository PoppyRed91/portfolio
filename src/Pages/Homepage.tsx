import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <main className="homepage_wrapper">
                <section className="title_wrapper">
                    <h1 className="homepage_title">Petra Cuturdic</h1>
                    <h3 className="homepage_description">Frontend Developer</h3>
                </section>
                <section className="homepage_navigation">
                    <ul>
                        <li><Link to="projects" className="homepage_projects">Projects</Link></li>
                        <li><Link to="aboutandcontact" className="homepage_contact">About & Contact</Link></li>
                    </ul>
                </section>
            </main>
        </>
    )
}