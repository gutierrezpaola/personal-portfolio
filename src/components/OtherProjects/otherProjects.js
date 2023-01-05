
function Service(props) {
    return (
        <>
            <div className="col-md-6 prueba">
                <div className={props.id + " feature-box-01"}>
                    <div className="icon">
                        <i className={`bi bi-${props.icon}`}></i>
                    </div>

                    <div className="feature-content">
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                    </div>
                    <div className="portfolio-btn">
                        <a target="_blank" rel="noopener noreferrer" 
                        href={props.link} 
                        className="gallery-link gallery-link-icon" >
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}


export default function ServiceList() {
    const service_list = [
        {id:'bg-1', title:'Lego Store', description:'Create the structure, web design, animations and micro-interactions of a project with CSS Grid. Access the DOM of an application with JavaScript to interact with users.', icon: 'bricks', link: 'https://gutierrezpaola.github.io/lego-heroes-html-css-js/'},
        {id:'bg-2', title:'Calculator', description:'HTML - CSS - JS', icon: 'calculator', link: 'https://gutierrezpaola.github.io/calculator-html-css-js/'},
        {id:'bg-3', title:'Batatabit', description:'Create and apply styles with CSS that can be reused, apply media queries to adapt device views, analyze the architecture of your project based on a wireframe, carry out an audit with Lighthouse', icon: 'cash', link: 'https://gutierrezpaola.github.io/batatabit-html-css/'},
        {id:'bg-4', title:'Google Clone', description:'Create the Header, structure the main content, and build the Footer of a page. Using: positioning, box model, display types, flexbox and CSS Grid.', icon: 'google', link: 'https://gutierrezpaola.github.io/google-clone-html-css/'},
    ]
    return (
        <>
        <section data-scroll-data="1" id="services" className="section services-section" style={{ "backgroundImage": "url(/img/effect/bg-effect-1.png)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
                <div className="container">
                    <div className="row section-heading justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3><span>Other Projects</span></h3>
                        </div>
                    </div>
                    <div className="row gy-4" style={{display: "flex"}}>
                        {
                            service_list.map((val, i)=>{
                                return <Service key={i} id={val.id} title={val.title} description={val.description} icon={val.icon} link={val.link} />
                            })
                        }
                    </div>                   
                </div>
            </section>
        </>
    );
}
