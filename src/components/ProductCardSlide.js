import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import proImg from "../images/Rectangle 1887.png";
import proImg2 from "../images/Rectangle 1887-1.png";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


const ProductCardSlide = () => {


    return (
        <div>
            <Swiper
                pagination={{
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                    clickable: true
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                modules={[Navigation, Pagination]}
            >
                <SwiperSlide className="mb-2">
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
                <div className="swiper-button swiper-button-prev absolute" >
                    <BsFillArrowLeftCircleFill className="text-3xl text-black bg-white rounded-full" />
                </div>
                <div className="swiper-button swiper-button-next absolute" >
                    <BsFillArrowRightCircleFill className="text-3xl text-black bg-white rounded-full" />
                </div>
            </Swiper>
        </div>
    )
}

export default ProductCardSlide;