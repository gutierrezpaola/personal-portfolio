import { Link } from "react-scroll";

function Menu(props){
    return <li><Link className="nav-link" data-scroll-nav={props.id}  smooth={true} to={props.link}><span>{props.name}</span></Link></li>;
}

export default function Header() {
    const header_menus = [
        { id:0, name:'Home', scroll_link:'home' },
        { id:1, name:'About', scroll_link:'about' },
        { id:2, name:'Skills', scroll_link:'skill' },
        { id:3, name:'Projects', scroll_link:'projects' },
        { id:4, name:'Contact', scroll_link:'contact' }
    ]
    return (
        <>
            <header className="main-header">
                <nav className="navbar header-nav navbar-expand-lg one-page-nav">
                    <div className="container">
                        <Link className="navbar-brand"  smooth={true} to="home">
                        </Link>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
                            <ul className="navbar-nav mx-auto">
                                {
                                    header_menus.map((val, i) => {
                                        return <Menu key={i} id={val.id} name={val.name} link={val.scroll_link}/>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="ms-auto d-none d-lg-block">
                            <Link className="px-btn px-btn-theme" data-scroll-nav="4" smooth={true} to="contact">Contact Now</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
