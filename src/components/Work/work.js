export default function Work() {
    return (
        <>
            <section data-scroll-data="3" id="work" className="section work-section">
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
                                    <img src="img/1.png" title="p1" alt="p1"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                <h6><span>WebSocket</span></h6>
                                    <h4>Chat Room</h4>
                                    <p>Practical tutorial, in which I learned how to create a Nodejs server and configure the Web Sockets server to then communicate with the React frontend.</p>
                                    <div className="btn-bar">
                                        <a target="_blank" rel="noopener noreferrer" href="./" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img project-2">
                                    <img src="img/todos.jpg" title="p1" alt="p1"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                <h6><span>Face IO</span></h6>

                                    <h4>Facial Recognition</h4>
                                    <p>........</p>
                                    <div className="btn-bar">
                                        <a target="_blank" rel="noopener noreferrer" href="./" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img project-3">
                                    <img src="img/3.png" title="p1" alt="p1"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-text">
                                <h6><span>React</span></h6>
                                    <h4>To Do List</h4>
                                    <p>Work with components, properties, state, and effects. Store information in Local Storage, implement React Context to communicate components.</p>
                                    <div className="btn-bar">
                                        <a target="_blank" rel="noopener noreferrer" href="https://gutierrezpaola.github.io/to-do-list-react/" className="px-btn px-btn-theme" data-scroll-nav="4">View Project </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
                            <div className="col-md-6 col-lg-5">
                                <div className="portfolio-img project-4">
                                    <img src="img/44.png" title="p1" alt="p1"/>
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
                    </div>
                </div>
            </section>
        </>
    );
}
