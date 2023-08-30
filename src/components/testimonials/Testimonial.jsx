import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data=[

  {
    avatar:AVTR1,
    name: "Neel",
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolor eaque maxime cumque similique minima? Id perferendis laudantium esse ad ipsam atque totam iusto hic, ullam saepe sit eos sequi.Tenetur officiis dolores laudantium sunt tempore minima atque nam odit saepe, nostrum fugit dignissimos incidunt magni, eligendi facilis natus. Consequuntur hic nobis odio velit placeat dolor dicta qui voluptatibus nemo!'
  },
  {
    avatar:AVTR2,
    name: "Neel",
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolor eaque maxime cumque similique minima? Id perferendis laudantium esse ad ipsam atque totam iusto hic, ullam saepe sit eos sequi.Tenetur officiis dolores laudantium sunt tempore minima atque nam odit saepe, nostrum fugit dignissimos incidunt magni, eligendi facilis natus. Consequuntur hic nobis odio velit placeat dolor dicta qui voluptatibus nemo!'
  },
  {
    avatar:AVTR3,
    name: "Neel",
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolor eaque maxime cumque similique minima? Id perferendis laudantium esse ad ipsam atque totam iusto hic, ullam saepe sit eos sequi.Tenetur officiis dolores laudantium sunt tempore minima atque nam odit saepe, nostrum fugit dignissimos incidunt magni, eligendi facilis natus. Consequuntur hic nobis odio velit placeat dolor dicta qui voluptatibus nemo!'
  },
  {
    avatar:AVTR4,
    name: "Neel",
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolor eaque maxime cumque similique minima? Id perferendis laudantium esse ad ipsam atque totam iusto hic, ullam saepe sit eos sequi.Tenetur officiis dolores laudantium sunt tempore minima atque nam odit saepe, nostrum fugit dignissimos incidunt magni, eligendi facilis natus. Consequuntur hic nobis odio velit placeat dolor dicta qui voluptatibus nemo!'
  }
]

const testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >

          {
            data.map(({avatar,name,review},index) => {
              return(
                <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                <img src={avatar} alt="avatar1" />
                </div>
                <h5 className='clients_name'>{name}</h5>
                <small className='clients__review'>{review}
                </small>
                </SwiperSlide>
              )   
            })
          }

      </Swiper>
    </section>
  )
}

export default testimonial
