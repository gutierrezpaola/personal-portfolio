import Header from "../Header/header"
import Banner from "../Banner/banner"
import About from "../About/about"
import Brand from "../Brand/brand"
import SkillList from "../Skills/skill"
import Work from "../Work/work"
import OtherProjects from "../OtherProjects/otherProjects"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"


export default function Paola() {
    return (
        <>
            <Header/>
                <main className="wrapper">
                    <Banner/>
                    <Brand /> 
                    <About/>
                    <SkillList/>
                    <Work/>
                    <OtherProjects />
                    <Contact/>
                </main>
            <Footer/>
        </>
    )
}
