import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMGUP from '../../assets/portfolio-up.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data=[
{
  id:1,
  image: IMG1,
  title:"Calculator",
  github: 'https://github.com/Vijaya017/CalculatorApp',
  demo: 'https://github.com/Vijaya017/CalculatorApp'
},
{
  id:2,
  image: IMG2,
  title:"Tic Tac Toe - the game ",
  github: 'https://github.com/Vijaya017/TicTacToe',
  demo: 'https://vijaya017.github.io/TicTacToe/'
},
{
  id:3,
  image: IMGUP,
  title:"Database Project",
  github: 'https://github.com',
  demo: 'hello'
}
// ,
// {
//   id:4,
//   image: IMG4,
//   title:"Crypto Currency Dashboard & Financial Visulization",
//   github: 'https://github.com',
//   demo: 'hello'
// },
// {
//   id:5,
//   image: IMG5,
//   title:"Crypto Currency Dashboard & Financial Visulization",
//   github: 'https://github.com',
//   demo: 'hello'
// },
// {
//   id:6,
//   image: IMG6,
//   title:"Crypto Currency Dashboard & Financial Visulization",
//   github: 'https://github.com',
//   demo: 'hello'
// }
  
]
const Portfolio = () => {
  return (
   <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
    {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key={id}className="portfolio__items">
            <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__items CTA">
            <a href={github} className='btn'target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>
          )

        })
      }
      
      </div>
    </section>
  )
}

export default Portfolio
