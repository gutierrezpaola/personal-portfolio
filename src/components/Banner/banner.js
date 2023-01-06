import ReactTypingEffect from 'react-typing-effect';

import bannerImg from '../../assets/img/banner-img.png'

export default function Banner() {

const descriptions = ["Developer", "Adventurer", "Pet Lover"]
    
    return (
        <>
            <section data-scroll-data="0" id="home" className="home-section bg-gray">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="home-intro one-page-nav text-center text-lg-start">
                                <h6>Hi, My name is Paola</h6>
                                <h1>I'm a  <ReactTypingEffect text={descriptions}
                                    speed="100" typingDelay="500" eraseDelay="200" /> </h1>
                                <p>Located in Bogotá, Colombia</p>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <div className="home-image text-center">
                                <img src={bannerImg} alt="bannerImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
