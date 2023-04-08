import React, { useCallback, useRef } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import proImg from "../images/Rectangle 1887.png";
import proImg2 from "../images/Rectangle 1887-1.png";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCardSlide = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <div>
            <div className="swiper-button swiper-button-prev absolute" onClick={handlePrev}>
                <BsFillArrowLeftCircleFill className="text-3xl text-black bg-white rounded-full" />
            </div>
            <div className="swiper-button swiper-button-next absolute" onClick={handleNext}>
                <BsFillArrowRightCircleFill className="text-3xl text-black bg-white rounded-full" />
            </div>

            <Swiper
                pagination={{
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                    clickable: true
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
                loop={true}
                modules={[Navigation, Pagination]}
            >
                <SwiperSlide>
                    <div>
                        <img src={proImg2} className="mx-auto" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={proImg} className="mx-auto" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={proImg2} className="mx-auto" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductCardSlide;