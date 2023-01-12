import backgroundImg from '../../assets/img/effect/bg-effect-1.png';

function OtherProjects(props) {
    return (
        <>
            <div className="col-md-6">
                <div className={props.id + " feature-box-01 h-100"}>
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

export default function ProjectsList() {
    const projects_list = [
        {id:'bg-1', title:'To Do List', description:'Work with components, properties, state, and effects. Store information in Local Storage, implement React Context to communicate components.', icon: 'card-checklist', link: 'https://gutierrezpaola.github.io/to-do-list-react/'},
        {id:'bg-2', title:'Calculator', description:'Personal project, first project using JavaScript', icon: 'calculator', link: 'https://gutierrezpaola.github.io/calculator-html-css-js/'},
        {id:'bg-3', title:'Batatabit', description:'Created and applied styles with CSS that can be reused, applied media queries to adapt device views, analyzed the architecture of the project based on a wireframe, carried out an audit with Lighthouse.', icon: 'cash', link: 'https://gutierrezpaola.github.io/batatabit-html-css/'},
        {id:'bg-4', title:'Google Clone', description:'Created the Header, structure the main content, and build the Footer of a page. Using: positioning, box model, display types, flexbox and CSS Grid.', icon: 'google', link: 'https://gutierrezpaola.github.io/google-clone-html-css/'},
    ]
    return (
        <>
        <section data-scroll-data="3" id="projects" className="section other-projects-section" style={{ "backgroundImage": `url(${backgroundImg})`, "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
                <div className="container">
                    <div className="row section-heading justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3><span>Other Projects</span></h3>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {
                            projects_list.map((val, i)=>{
                                return <OtherProjects key={i} id={val.id} title={val.title} description={val.description} icon={val.icon} link={val.link} />
                            })
                        }
                    </div>                   
                </div>
            </section>
        </>
    );
}

