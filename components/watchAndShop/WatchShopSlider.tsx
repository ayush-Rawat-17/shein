"use client";
import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import { fetchSimilarProductsForCart } from "../../config/typesense";
import WatchShopCard from "./WatchShopCard";
import Link from "next/link";
import FlatIcon from "../flatIcon/flatIcon";

const WatchShopSlider = () => {
  const slider = useRef<any>(null);
  const { data: similarData } = useQuery({
    queryKey: ["product", "caricature-cartoon", "similar-product"],
    queryFn: () =>
      fetchSimilarProductsForCart({
        searchKeywords: ["Gentlemen's Collection", "Nike"],
      }),
  });
  // console.log(similarData,"simildar data");

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
          arrows: false,
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
  const arrowButtonClass =
  "absolute top-0 bottom-0 my-auto bg-[#F2F7FF] sm:w-10 sm:h-10 h-8 w-8 block text-white cursor-pointer z-20 rounded-full ";
  return (
    <>
      {similarData && similarData.length > 0 && (
        <div className="px-body bg-[#fef8fb] relative">
          <div className="md:pt-12 pt-6 ">
            <div className="text-center ">
              <h1 className="sm:text-3xl text-xl font-bold">WATCH AND SHOP</h1>
              {/* <div className="">
                <Link
                  href={`/view-all?type=${section?.widgetType}&id=${section?.widgetID}&name=${section?.sectionName}`}
                  className="text-primary font-medium underline"
                >
                  View All
                </Link>
              </div> */}
            </div>
            {/* <div> */}
            <div className="  justify-center items-center   md:py-12 py-6 ">
            <div className="">
                <button
                  className={`${arrowButtonClass} left-0 lg:left-4 flex items-center justify-center`}
                  onClick={() => slider.current?.slickPrev()}
                >
                  <FlatIcon className="flaticon-left-arrow text-secondary sm:text-2xl text-lg font-bold"/>
                </button>
              </div>
              <div className="back  ">
                <div className="w-[100%]  h-auto only-carousel">
                  <Slider
                    ref={slider}
                    {...settings}
                    className=""
                    dotsClass={`slick-dots `}
                    nextArrow={<></>}
                    prevArrow={<></>}
                    draggable={true}
                  >
                    {[1, 3, 4, 6, 7, 9, 9, 5].map((item: any, idx: number) => {
                      return (
                        <div key={idx}>
                          <WatchShopCard />
                          {/* <ProductCard product={item} mx={2.5} /> */}
                        </div>
                      );
                    })}
                  </Slider>
                  <div className="">
                <button
                  className={`${arrowButtonClass} right-0 lg:right-4 text-center flex items-center justify-center   `}
                  onClick={() => slider.current?.slickNext()}
                >
                  <FlatIcon className="flaticon-left-arrow -rotate-180 text-secondary sm:text-2xl text-lg font-bold"/>
                </button>
              </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default WatchShopSlider;
