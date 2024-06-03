import React from 'react'
import "./skill.scss"
import {motion} from "framer-motion";

const Skill = () => {
    return (
        <section className='skill-container section' id='about'>
            <h1 className='h1'>My Skills in Developer</h1>
            <div className="about_data grid">
                <div className="about_info" >
                    <p className="about_desc">
                        Gulshan Kumar | MERN Stack Developer <br/>
                        I am a skilled MERN Stack Developer with a strong background in building dynamic and 
                        responsive web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, 
                        I excel at creating full-stack solutions that are both scalable and efficient. With a keen 
                        eye for detail and a passion for coding, I deliver robust applications tailored to meet client needs. </p>
                    <a href="https://app.luminpdf.com/viewer/65e84f6e780982105b2a6b14"> <motion.button whileHover={{background:"white"}}>⏫DOWNLOAD CV</motion.button></a>
                </div>

                {/* development */}


                <div className="about_skills grid">
                    <div className="skills_data">
                        <div className="skills_titles ">
                            <h3 className='skills_name '>Frontend Developer</h3>
                            <span className='skills_number'>80%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage developer"></span>
                        </div>
                    </div>
                    <br/>

                    {/* ui/ux development */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>UI/UX Design</h3>
                            <span className='skills_number'>95%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage design"></span>
                        </div>
                    </div>
                    <br />

                    {/* react developer */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>JAVASCRIPT</h3>
                            <span className='skills_number'>90%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage java"></span>
                        </div>
                    </div>
                    <br />

                    {/* react.js */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>React.Js</h3>
                            <span className='skills_number'>85%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage react"></span>
                        </div>
                    </div>
                    <br />
                    {/* MYSQL */}
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className='skills_name'>MYSQL</h3>
                            <span className='skills_number'>65%</span>
                        </div>

                        <div className="skills_bar" >
                            <span className="skills_percentage sql"></span>
                        </div>
                    </div>
                    




                </div>
            </div>
        </section>
    )
}

export default Skill
