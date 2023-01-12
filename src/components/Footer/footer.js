function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 py-2">
                        <div className="nav justify-content-center justify-content-md-start">  
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/gutierrezpaolaa/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/gutierrezpaola">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                        <div className="col-md-6 py-2 text-center text-md-end">
                            <p className="m-0">© 2023 COPYRIGHT ALL RIGHTS RESERVED</p>
                        </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;