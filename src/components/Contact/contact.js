import React from "react";
import { useForm } from "@formspree/react";

import backgroungImgContact from '../../assets/img/effect/bg-effect-3.png'

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mgebebnv");
    if (state.succeeded) {
    }

    const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(e);
    e.target.reset();
    }
    return (
        <>
        <section data-scroll-data="4" id="contact" className="section 
        contact-section bg-dark" style={{ "backgroundImage": `url(${backgroungImgContact})`, "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center"}}>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <h6>Get in touch</h6>
                            <p className="lead">For more information, please send me a message.</p>
                            <form id="contact-form" onSubmit={submitForm}>
                                <div className="row gx-3 gy-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input name="name" id="name" type="text" placeholder="Name *" className="form-control"  required/> 
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Email</label>
                                            <input name="email" id="email" type="email" placeholder="Email *" className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label">Subject</label>
                                            <input name="subject" id="subject" type="text" placeholder="Subject" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">Message</label>
                                            <textarea name="message" id="message" placeholder="Message *" rows="4" className="form-control" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button className="px-btn px-btn-theme2" type="submit" value="Send" disabled={state.submitting}> Send Message</button>
                                        </div>
                                        {state.succeeded && (
                                            <div className="alert alert-success" role="alert">    
                                                Thanks for contacting me, I'll write to you soon.
                                            </div>                       
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 ms-auto col-xl-4">
                        <ul className="contact-infos">
                            <li>
                                <div className="icon bg-1">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                                <div className="col">
                                    <h5>Linkedin</h5>
                                    <a target="_blank" rel="noopener        noreferrer"
                                    href="https://www.linkedin.com/in/gutierrezpaolaa/">
                                        <p>gutierrezpaolaa</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="icon bg-5">
                                    <i className="fab fa-github"></i> 
                                </div>
                                <div className="col">
                                    <h5>GitHub</h5>
                                    <a target="_blank" rel="noopener noreferrer"
                                    href="https://github.com/gutierrezpaola">
                                        <p>gutierrezpaola</p>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="icon bg-2">
                                    <i className="fas fa-envelope"></i> 
                                </div>
                                <div className="col">
                                    <h5>Mail</h5>
                                    <a target="_blank" rel="noopener noreferrer"
                                    href="mailto:paolagupe4@gmail.com">
                                        <p>paolagupe4@gmail.com</p>
                                    </a> 
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
