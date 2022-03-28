import React from 'react';
import { Navigation, Pagination, Thumbs} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './Slider.module.css';

const Slider = ({feed}) => {
    return <>
        <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            spaceBetween={24}
            slidesPerView={2}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            className={s.swiper}
        >
            {feed.map((slide, id) => (
                <SwiperSlide key={id}>
                    <div className={s.item}>
                        <div className={s.title}>
                            <div className={s.slideFoto}>
                                <img src={slide.image} alt=""/>
                                <span>{slide.name}</span>
                            </div>
                            <div className={s.date}>{slide.date}</div>
                        </div>
                        <p>{slide.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
}

export default Slider;