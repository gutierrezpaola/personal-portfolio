import Header from "../Header/header"
import Banner from "../Banner/banner"
import About from "../About/about"
import Particless from "../Particless/particless"
import SkillList from "../Skills/skill"
import Projects from "../Projects/projects"
import OtherProjects from "../OtherProjects/otherProjects"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"


export default function Paola() {
    return (
        <>
            <Header/>
                <main className="wrapper">
                    <Banner/>
                    <Particless /> 
                    <About/>
                    <SkillList/>
                    <Projects/>
                    <OtherProjects />
                    <Contact/>
                </main>
            <Footer/>
        </>
    )
}
