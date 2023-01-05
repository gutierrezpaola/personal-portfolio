import { Link } from "react-scroll";

export default function About() {
    return (
        <>
            <section className="section about-section">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6 text-center">
                            <img src="img/about-img.png" title="Banner" alt="Banner"/>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <div className="about-text">
                                <h3 className="h1">I'm a Web Developer 1 year ago</h3>
                                <p>I'm from Bogotá, Colombia. I've worked with the technologies: HTML, CSS, JavaScript, TypeScript, React, Frameworks, Libraries and Git y GitHub. I'm passionate about continuous learning in technologies and skills that allow me to improve productivity.
                                I would like to work with new people. New people new Experiences.
                                    </p>
                                <div className="btn-bar pt-4">
                                    <Link className="px-btn px-btn-theme me-4" to="contactus">Contact Me</Link>
                                    <Link className="px-btn px-btn-dark" to="work">Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
