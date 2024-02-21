import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';

// import { Pagination } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = (props) => {
    const { data } = props;

    return (
        <Swiper
            slidesPerView={1}
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            
            
              }}
            // centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            navigation={true}
            pagination={{   
                clickable: true,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper-Banner md:container"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {data.map((v, index) => (
                <SwiperSlide key={index}>
                    <img src={v.pcImageUrl} alt='' />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
