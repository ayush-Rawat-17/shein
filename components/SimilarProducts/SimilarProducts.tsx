import React, { useEffect, useState, useRef } from 'react'
import { fetchSimilarProductsForCart } from '../../config/typesense'
import ProductCard from '../categoryProduct/productCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SimilarProducts = ({ heading, similarProductData,from }) => {
  // console.log(similarProductData, "dfgggfdh---------");
console.log(from,"from");

  const [similarProducts, setSimilarProducts] = useState([])
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 5,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          infinite: false,
          dots: false,
          arrows: false
        },
      },
      {
        breakpoint: 833,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          initialSlide: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          initialSlide: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2.5,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={`${className}`} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={`${className}`} onClick={onClick} />;
  }

  return (
    <>
    {similarProductData&&similarProductData.length > 0&&<div className='px-body'>
      <div className={`${from==="cart"?"text-start":"text-center"}`}><h1 className={` ${from==="cart"?"sm:text-2xl text-xl" :"sm:text-3xl text-xl"} ${from==="cart"?"font-semibold":"font-bold"}`}>{heading}</h1></div>
      <div className={` justify-center items-center relative   ${from==="cart"?"my-5":"md:my-12 my-6"}`}>
        <div className="back  ">
          <div className="w-[100%]  h-auto only-carousel">
            <Slider
              ref={slider}
              {...settings}
              className=""
              dotsClass={`slick-dots `}
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
              draggable={true}
            >
              {similarProductData && similarProductData.length > 0 && similarProductData.map((item: any, idx: number) => {
                return <div key={idx} >
                  <ProductCard product={item} mx={2.5} />
                </div>

              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  }
  </>
  )
}

export default SimilarProducts