import React, { useEffect, useState } from 'react';
import proImg from "../images/Rectangle 1887.png";
import proImg2 from "../images/Rectangle 1887-1.png";
import addImg from "../images/add.png";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BsCurrencyDollar, BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from "react-countdown";

const FlashProduct = () => {

    //__SLIDER CONTROLLERS STARTS__*************
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute -top-9 sm:-top-14 right-0 z-50 text-black'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <BsFillArrowRightCircleFill className="text-base bg-[#fff] transition-all ease-in cursor-pointer w-7 h-7 text-center flex items-center justify-center rounded-full" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute -top-9 sm:-top-14 z-50 text-black right-10'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <BsFillArrowLeftCircleFill className="fa-solid fa-angle-left text-base bg-[#fff] transition-all ease-in cursor-pointer w-7 h-7 text-center flex items-center justify-center rounded-full" />

            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }

        ]
    };
    //__SLIDER CONTROLLERS ENDS__*************


    return (
        <div className="py-5">
            <div className="flex flex-col md:flex-row items-center space-x-2 space-y-5 md:space-y-0">
                <div className="border-2 border-black p-1">
                    <h2 className="text-2xl sm:text-4xl"><span className="font-[900]">Flash</span> Sale Product</h2>
                </div>
                <Countdown date={Date.now() + 200000000} renderer={props => (
                    <div className="flex items-center space-x-2">
                        <span className="bg-info/30 py-1 px-2 text-info font-bold rounded">{props.days}d</span>
                        <span className="text-info text-lg font-bold rounded">:</span>
                        <span className="bg-info/30 py-1 px-2 text-info font-bold rounded">{props.hours}h</span>
                        <span className="text-info text-lg font-bold rounded">:</span>
                        <span className="bg-info/30 py-1 px-2 text-info font-bold rounded">{props.minutes}m</span>
                        <span className="text-info text-lg font-bold rounded">:</span>
                        <span className="bg-info/30 py-1 px-2 text-info font-bold rounded">{props.seconds}s</span>
                    </div>
                )} />
            </div>


            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 lg:col-span-10 pt-14 sm:pt-10 pb-10">
                    <Slider {...settings}>
                        {
                            [...Array(10).keys()].map((product, index) => (
                                <div key={index} className="sm:px-3">
                                    <ProductCard />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="col-span-12 lg:col-span-2 flex items-end justify-center w-full pt-2 pb-10">
                    <div className="">
                        <img src={addImg} className="w-full cursor-pointer" alt="" />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default FlashProduct;