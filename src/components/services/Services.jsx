import React from 'react'
import './services.css'
//import {AiOutlineCheck} from 'react-icons/ai'


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design <br /> Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon" size={18}/> */}
              <p>Proficient in graph designing.</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon" size={18}/> */}
              <p>Extensive experience using Figma and Canva.</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"size={18}/> */}
              <p>Skilled in creating user-friendly front-end websites</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"size={18}/> */}
              <p>Successfully developed an Apple clone website</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"size={18}/> */}
              <p>Basic knowledge of React; capable of working on projects involving React.</p>
            </li>
            {/* <li>
              <AiOutlineCheck className="sevice__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>AI/ML</h3>
          </div>

          <ul className='service__list'>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon" /> */}
              <p>Strong foundation in AI/ML concepts.</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"/> */}
              <p>Familiarity with the mathematical principles underpinning various basic topics.</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"/> */}
              <p>Collaborated within a team to successfully develop a regression model as part of a program.</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"/> */}
              <p>Currently focused on supervised learning methodologies.</p>
            </li>
           
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Cloud</h3>
          </div>

          <ul className='service__list'>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"/> */}
              <p>Familiar with the fundamental concepts of cloud architecture.</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"/> */}
            <p>Basic understanding of cloud databases and servers.</p>
                </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"/> */}
              <p>Knowledgeable about cloud analytics and security.</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"/> */}
              <p>Proficient in explaining the basics of AWS, despite limited hands-on experience.</p>
            </li>
            <li>
              {/* <AiOutlineCheck className="sevice__list-icon"/> */}
              <p>Capable of teaching others about AWS fundamentals.</p>
            </li>
          </ul>
        </article>
      
      </div>
    </section>
  )
}

export default Services
