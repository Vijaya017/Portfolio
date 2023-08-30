import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
       <h5>What Skiils I Have </h5>
       <h2>My Experiences</h2>

       <div className="container experience__container">
        <div className="experience__frontend">
              <h3>Technical</h3>
              <div className="experience__content">

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>JAVASCRIPT</h4>
                  <small className='text-light'>Basic</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>JAVA</h4>
                  <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>REACT</h4>
                  <small className='text-light'>Basic</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>PYTHON</h4>
                  <small className='text-light'>Basic</small></div>
                </article>

              </div>
              </div>
             


                <div className="experience__backend">
                <h3>Domain</h3>
              <div className="experience__content">

                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>UI/UX</h4>
                  <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>Frontend Development</h4>
                  <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>AI/ML</h4>
                  <small className='text-light'>Basic</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>CLOUD COMPUTING</h4>
                  <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>ORACLE SQL</h4>
                  <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience_icons'/>
                  <div>
                  <h4>AWS</h4>
                  <small className='text-light'>Basic</small></div>
                </article>

                </div>
              </div>
       </div>
    </section>
  )
}

export default Experience
