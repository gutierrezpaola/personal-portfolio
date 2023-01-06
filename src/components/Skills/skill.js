import skillsImg from  '../../assets/img/skills-img.png';
import htmlImg from  '../../assets/img/html.png';
import cssImg from  '../../assets/img/css.png';
import jsImg from  '../../assets/img/js.png';
import reactImg from  '../../assets/img/react.png';

function Skill(props) {
    return (
        <>
            <div className="col-6 col-md-4 col-lg-6">
                <div className={props.id + " feature-box-02 "}>
                    <div className="icon">
                        <img src={props.img} alt="skills-img" />
                    </div>
                    <h6>{props.title}</h6>
                </div>
            </div>
        </>
    );
}

export default function SkillList() {

    const skill_list = [
        {id:'bg-1', title:'HTML', img: htmlImg },
        {id:'bg-2', title:'CSS', img: cssImg },
        {id:'bg-3', title:'JavaScript', img: jsImg },
        {id:'bg-4', title:'React', img: reactImg },
    ]

    return (
        <>
            <section data-scroll-data="2" id="skill" className="section experience-section pb-0 bg-gray" >
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h3 className="m-0"><span>My Skills</span></h3>
                            </div>
                            <div className="skill-box">
                                <div className="row g-3">
                                    {
                                        skill_list.map((val, i)=>{
                                            return <Skill key={i} id={val.id} title={val.title} img={val.img}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={skillsImg} alt="skillsImg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
