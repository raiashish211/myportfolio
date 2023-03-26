import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quo ullam nisi ipsam consequuntur nemo, ea molestias rem rerum. Illo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quo ullam nisi ipsam consequuntur nemo, ea molestias rem rerum. Illo?'
    },
    {
        avatar: AVTR2,
        name: 'WILLIAM',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quo ullam nisi ipsam consequuntur nemo, ea molestias rem rerum. Illo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quo ullam nisi ipsam consequuntur nemo, ea molestias rem rerum. Illo?'
    },
    {
        avatar: AVTR3,
        name: 'IMRAN',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quo ullam nisi ipsam consequuntur nemo, ea molestias rem rerum. Illo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quo ullam nisi ipsam consequuntur nemo, ea molestias rem rerum. Illo?'
    },
    {
        avatar: AVTR4,
        name: 'AALIYA',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quo ullam nisi ipsam consequuntur nemo, ea molestias rem rerum. Illo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quo ullam nisi ipsam consequuntur nemo, ea molestias rem rerum. Illo?'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="avatar one" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
