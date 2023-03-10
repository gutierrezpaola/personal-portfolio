import { Link } from "react-scroll";

import AboutImg from  '../../assets/img/about-img.png';

export default function About() {
    return (
        <>
            <section data-scroll-data="1" id="about" className="section about-section">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6 text-center">
                            <img src={AboutImg} alt="AboutImg"/>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <div className="about-text">
                                <h3 className="h1">I've been a Web Developer for a year</h3>
                                <p>I'm from Bogotá, Colombia. I've worked with the technologies: HTML, CSS, JavaScript, TypeScript, React, and Git. I'm passionate about continuous learning in technologies and skills that allow me to improve productivity.I would like to work with new people to gain more knowledge and continue to grow in Web Development, software and technology in general.
                                    </p>
                                <div className="btn-bar pt-4">
                                    <Link className="px-btn px-btn-theme me-4" to="contact">Contact Me</Link>
                                    <Link className="px-btn px-btn-dark" to="projects">Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
