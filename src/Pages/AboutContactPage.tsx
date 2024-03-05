import { Link } from "react-router-dom"

export default function AboutContactPage() {
    return(        
        <>
            <main className="aboutcontact_wrapper">
                <section className="about_container">
                    <h1 className="about_title">About</h1>
                        <p className="about_description">I am Petra, currently immersing 
                        myself in the world of Frontend development as a student at Hyper Island.
                        Here's a rundown of my skills: HTML, CSS, TypeScript, JavaScript and React.
                        I'm commited to continuous learning and professional growth.</p>
                </section>
                <section className="contact_wrapper">
                    <h2 className="contact_title">Connect with me!</h2>
                        <p className="contact_description">I'm actively seeking an internship opportunity. Any chance your team
                            could use someone with my skillset and support me in my learnings?
                            Let's discuss how I can contribute to your projects and be a valuable
                            addition to your team! 
                        </p>
                        <ul className="contact_list">
                            <li><Link to="mailto:petra@cuturdic.com"><img src={require("../Assets/mail.png")} className='navbar_contact-img' alt="E-mail logo"></img></Link></li>
                            <li><Link to="https://www.linkedin.com/in/petra-cuturdic/" target="_blank"><img src={require("../Assets/linkedin.png")} className='navbar_contact-img' alt="LinkedIn logo"></img></Link></li>
                            <li><Link to="https://github.com/PoppyRed91" target="_blank"><img src={require("../Assets/github.png")} className='navbar_contact-img' alt="GitHub logo"></img></Link></li>
                        </ul>
                </section>
            </main>
        </> 
    )
}