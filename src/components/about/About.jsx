import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-img" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Month working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about_icon'/>
                <h5>Client</h5>
                <small>300</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Project</h5>
                <small>80</small>
              </article>

            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit aspernatur, assumenda 
              dignissimos rerum nulla excepturi, maxime voluptates repellendus similique placeat? Rerum incidunt, magni iure suscipit temporibus itaque officia quaerat.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

     

    </section>
  )
}

export default About
