import React from 'react';
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { BsCurrencyDollar, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import proImg from "../images/Rectangle 1887.png";
import proImg2 from "../images/Rectangle 1887-1.png";
import Slider from "react-slick";
import 'swiper/css';
import "swiper/css/navigation";
import ProductCardSlide from "./ProductCardSlide";




const ProductCard = () => {

    //SLICK__SLIDER CONTROLLERS STARTS__************* THIS SLIDER DIDN'T USED FOR SOME ISSUES AFTER HOVERING THE CARD.
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute top-[47%] right-1 z-50 text-black duration-500 ease-linear'
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
                className='absolute top-[47%] left-1 z-50 text-black'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <BsFillArrowLeftCircleFill className="fa-solid fa-angle-left text-base bg-[#fff] transition-all ease-in cursor-pointer w-7 h-7 text-center flex items-center justify-center rounded-full" />

            </div>
        );
    }

    const settings = {
        fade: true,
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // arrows: false
    };
    //SLICK__SLIDER CONTROLLERS ENDS__***************


    return (
        <div className="group relative">
            <div className="border border-b-0 p-5">
                <span className="bg-red-500/20 pb-1 px-2 rounded absolute left-3 top-3">
                    <span className="text-red-500 text-xs font-[500]">Sale</span>
                </span>

                {/* PRODUCT IMAGE AND SLIDER */}
                <div className=" sm:h-36 lg:h-32 xl:h-32 xxl:h-40 mt-8 relative">
                    <div className="hidden lg:block">
                        <img src={proImg} className="mx-auto group-hover:hidden" alt="" />
                    </div>


                    <div className="lg:hidden group-hover:block duration-500 ease-linear">
                        {/* <div className="duration-500 ease-linear"> */}
                        {/* <Slider {...settings}>
                            <div className="">
                                <img src={proImg2} className="mx-auto" alt="" />
                            </div>
                            <div>
                                <img src={proImg} className="mx-auto" alt="" />
                            </div>
                            <div>
                                <img src={proImg} className="mx-auto" alt="" />
                            </div>
                        </Slider> */}

                        <ProductCardSlide />
                    </div>
                </div>
            </div>

            {/* PRODUCT TITLE */}
            <div className="border border-b-0 border-t-0 px-5 lg:px-6 pb-4 pt-4 lg:pt-9 2xl:pt-5">
                <h4 className="text-pera text-sm pb-1">Smart TV</h4>
                <h2 className="text-md font-[500]">Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television</h2>
            </div>

            {/* PRODUCT RATING */}
            <div className="border border-b-0 border-t-0 px-5 pb-4 lg:pb-0 lg:group-hover:hidden h-14">
                <div className="flex items-center space-x-2 pb-2">
                    <div className="flex">
                        <AiFillStar className="text-yellow-400 text-sm" />
                        <AiFillStar className="text-yellow-400 text-sm" />
                        <AiFillStar className="text-yellow-400 text-sm" />
                        <AiFillStar className="text-yellow-400 text-sm" />
                        <AiFillStar className="text-yellow-400 text-sm" />
                    </div>
                    <span className="text-pera text-xs">(5.0)</span>
                </div>

                <div className="flex items-center">
                    <BsCurrencyDollar className="text-lg text-primary" />
                    <h4 className="text-md text-primary font-semibold">2036.00</h4>
                    <div className="flex items-center ml-2 -space-x-1">
                        <BsCurrencyDollar className="text-sm text-pera" />
                        <span className="text-pera line-through text-sm">3000.00</span>
                    </div>
                </div>
            </div>

            {/* PRODUCT ACTIONS */}
            <div className="lg:hidden flex lg:group-hover:flex items-center justify-around border-t border-b py-1 h-14">
                <div className="hover:bg-black p-4 rounded-full text-black hover:text-white duration-200 ease-linear cursor-pointer">
                    <AiOutlineEye className="text-lg" />
                </div>
                <span className="w-[1px] h-5 bg-[#E5E7EB]"></span>
                <div className="hover:bg-black p-4 rounded-full text-black hover:text-white duration-200 ease-linear cursor-pointer">
                    <FiHeart className="text-lg" />
                </div>
                <span className="w-[1px] h-5 bg-[#E5E7EB]"></span>
                <div className="hover:bg-black p-4 rounded-full text-black hover:text-white duration-200 ease-linear cursor-pointer">
                    <BiSortAlt2 className="text-lg" />
                </div>
            </div>

            {/* ADD TO CART BUTTON */}
            <div className="p-5 border border-t-0">
                <button className="py-3 w-full text-sm bg-secondary hover:bg-primary text-primary hover:text-white duration-300 ease-linear font-[500] rounded flex items-center justify-center space-x-2"><span>Add To Cart</span> <HiOutlineShoppingBag className="text-xl" /></button>
            </div>
        </div>
    )
}

export default ProductCard;