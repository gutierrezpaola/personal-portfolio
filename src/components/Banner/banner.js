import ReactTypingEffect from 'react-typing-effect';

export default function Banner() {
    return (
        <>
            <section data-scroll-data="0" id="home" className="home-section bg-gray">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="home-intro one-page-nav text-center text-lg-start">
                                <h6>🖐️, My name is Paola</h6>
                                <h1>I'm a  <ReactTypingEffect text={["Developer"]}
                                    speed="100" typingDelay="500" eraseDelay="200" /> </h1>
                                <p>Located in Bogotá, Colombia</p>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <div className="home-image text-center">
                                <img className='imagen-baner' src="img/andersin.png" title="Banner" alt="Banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
