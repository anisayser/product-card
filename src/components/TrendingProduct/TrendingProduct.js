import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyDollar, BsFillArrowLeftCircleFill, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Slider from "react-slick";
import proImg from "../../images/Rectangle 1887-5.png";
import proImg2 from "../../images/Rectangle 1887-6.png";
import proImg3 from "../../images/Rectangle 1887-2.png";
import proImg4 from "../../images/Rectangle 1889.png";
import TrendingProductCard from "./TrendingProductCard";

const TrendingProduct = () => {

    //__SLIDER CONTROLLERS STARTS__*************
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute -top-11 sm:-top-14 right-0 z-50 text-black hover:bg-black hover:text-white p-2 rounded-full cursor-pointer'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <BsArrowRight className="text-xl transition-all ease-in text-center flex items-center justify-center rounded-full" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute -top-11 sm:-top-14 right-10 z-50 text-black hover:bg-black hover:text-white p-2 rounded-full cursor-pointer'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <BsArrowLeft className="text-xl transition-all ease-in text-center flex items-center justify-center rounded-full" />

            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    //__SLIDER CONTROLLERS ENDS__******


    return (
        <div className="py-5">
            <div className="flex justify-center sm:justify-start py-10">
                <div className="border-2 border-black p-1">
                    <h2 className="text-2xl sm:text-4xl"><span className="font-[900]">Trending</span> Products</h2>
                </div>
            </div>

            {/* __TRENDING SLIDER ONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">

                <div>
                    {/* __SECTION HEADING__ */}
                    <div className="text-center sm:text-start">
                        <h2 className="text-lg sm:text-2xl inline-block"><span className="font-[900]">Fashion</span> For Women</h2>
                    </div>

                    {/* __FASHION SLIDER__ */}
                    <div className="pt-14 sm:pt-5 pb-5">
                        <Slider {...settings}>
                            {
                                [...Array(10).keys()].map((product, index) => (
                                    <div key={index} className="space-y-5">
                                        <TrendingProductCard proImg={proImg3} />
                                        <TrendingProductCard proImg={proImg3} />
                                        <TrendingProductCard proImg={proImg3} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>

                <div>
                    {/* __SECTION HEADING__ */}
                    <div className="text-center sm:text-start">
                        <h2 className="text-lg sm:text-2xl inline-block"><span className="font-[900]">Food</span> For Health</h2>
                    </div>

                    {/* __FASHION SLIDER__ */}
                    <div className="pt-14 sm:pt-5 pb-5">
                        <Slider {...settings}>
                            {
                                [...Array(10).keys()].map((product, index) => (
                                    <div key={index} className="space-y-5">
                                        <TrendingProductCard proImg={proImg} />
                                        <TrendingProductCard proImg={proImg} />
                                        <TrendingProductCard proImg={proImg} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>

                <div>
                    {/* __SECTION HEADING__ */}
                    <div className="text-center sm:text-start">
                        <h2 className="text-lg sm:text-2xl inline-block"><span className="font-[900]">Cosmetics</span> For Winter</h2>
                    </div>

                    {/* __FASHION SLIDER__ */}
                    <div className="pt-14 sm:pt-5 pb-5">
                        <Slider {...settings}>
                            {
                                [...Array(10).keys()].map((product, index) => (
                                    <div key={index} className="space-y-5">
                                        <TrendingProductCard proImg={proImg4} />
                                        <TrendingProductCard proImg={proImg4} />
                                        <TrendingProductCard proImg={proImg4} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>







            </div>


        </div>
    )
}

export default TrendingProduct;