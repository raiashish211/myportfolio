import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Nearly 1 year industry and 1 year training/internship working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>As of now, having 4 happy Clients ☺️</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ completed projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque tempore, ipsum voluptate veritatis cum praesentium sequi doloribus provident mollitia magni, perferendis, maiores deleniti sed. Amet saepe perspiciatis itaque repudiandae repellat eos commodi sapiente odit
                    </p>
                    <a href="#contact" className='btn btn-primary'>Lets Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
