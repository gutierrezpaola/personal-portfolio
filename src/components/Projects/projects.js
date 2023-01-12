import project1 from '../../assets/img/project1.png';
import project2 from '../../assets/img/project2.png';
import project3 from '../../assets/img/project3.png';
import project4 from '../../assets/img/project4.png';

export default function Projects() {
    return (
        <>
            <section data-scroll-data="3" id="projects" className="section projects-section">
                <div className="container">
                    <div className="row section-heading justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3><span>Latest Projects</span></h3>
                        </div>
                    </div>
                    <div className="lightbox-gallery portfolio-box">
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img">
                                    <img src={project1} alt="project1" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                <h6><span>HTML - CSS - JS</span></h6>
                                    <h4>Lego Store</h4>
                                    <p>Created the structure, web design, animations and micro-interactions of a project with CSS Grid. Access the DOM of an application with JavaScript to interact with users.</p>
                                    <div className="btn-bar">
                                        <a target="_blank" rel="noopener noreferrer" href="https://gutierrezpaola.github.io/lego-heroes-html-css-js/" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img project-2">
                                    <img src={project2} alt="project2" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                <h6><span>HTML - CSS - JS</span></h6>
                                    <h4>Youtube Clone</h4>
                                    <p>Personal project, putting into practice what I have learned with HTML, CSS and javaScript.</p>
                                    <div className="btn-bar">
                                        <a target="_blank" rel="noopener noreferrer" href="https://gutierrezpaola.github.io/youtube-clone-html-css-js/" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img project-3">
                                <img src={project3} alt="project3" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                <h6><span>Face IO</span></h6>
                                    <h4>Facial Recognition</h4>
                                    <p>Practical tutorial, in this project we use the FaceIO APIs to authenticate a user using facial recognition in a React web application.</p>
                                    <div className="btn-bar">
                                        <a target="_blank" rel="noopener noreferrer" href="./" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img project-4">
                                <img src={project4} alt="project4" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                <h6><span>WebSocket</span></h6>
                                    <h4>Chat Room</h4>
                                    <p>Personal project to put in practice how to create a nodejs server, configure web sockets server to then communicate with the react frontend.

                                    Note: This is work in progress, some features could fail until I release the whole project</p>
                                    <div className="btn-bar">
                                        <a target="_blank" rel="noopener noreferrer" href="./" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

