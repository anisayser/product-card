import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
// import proImg from "../../images/Rectangle 1887-5.png";


const TrendingProductCard = ({ proImg }) => {
    return (
        <div className="border flex flex-col sm:flex-row items-center p-5 relative bg-white">
            <span className="bg-red-500/20 py-1 px-2 rounded absolute left-2 top-2">
                <span className="text-red-500 font-semibold text-sm">Sale</span>
            </span>

            <div className="sm:ml-10">
                <img src={proImg} className="mx-auto w-24" alt="" />
            </div>

            <div className="sm:pl-2 space-y-1 text-center sm:text-start">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <div className="flex">
                        <AiFillStar className="text-yellow-400 text-md" />
                        <AiFillStar className="text-yellow-400 text-md" />
                        <AiFillStar className="text-yellow-400 text-md" />
                        <AiFillStar className="text-yellow-400 text-md" />
                        <AiFillStar className="text-yellow-400 text-md" />
                    </div>
                    <span className="text-pera text-sm">(5.0)</span>
                </div>
                <div className="">
                    <h2 className="text-md font-[500]">Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television</h2>
                </div>

                <div className="flex items-center justify-center sm:justify-start">
                    <BsCurrencyDollar className="text-lg text-primary" />
                    <h4 className="text-md text-primary font-semibold">2036.00</h4>

                    <div className="flex items-center ml-1 -space-x-1">
                        <BsCurrencyDollar className="text-sm text-pera" />
                        <span className="text-pera line-through text-sm">3000.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProductCard;