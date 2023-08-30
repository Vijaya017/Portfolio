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
            <img src={ME} alt="About-me" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>2+ Month working</small><br />
                <small>Companies - IBM , Comviva </small>
              </article>

              <article className='about__card'>
                <FiUsers className='about_icon'/>
                <h5>Leetcode </h5>
                <small>150+</small><br />
                <small>Rank - 438,238 </small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Project</h5>
                <small>3+</small>
              </article>

            </div>

            <p>
            Dedicated undergraduate student pursuing a degree in Computer Science and Engineering at Siksha ’O’ Anusandhan. Demonstrated leadership 
            prowess through two successful tenures in prominent roles. Proficient in cultivating exceptional problem-solving and analytical abilities 
            through hands-on project work and active engagement in diverse programs. Committed to continuous growth, I consistently challenge myself to
            acquire new skills and elevate my capabilities as an aspiring engineer.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

     

    </section>
  )
}

export default About
