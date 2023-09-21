"use client";
import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import { fetchSimilarProductsForCart } from "../../config/typesense";
import WatchShopCard from "./WatchShopCard";

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

  return (
    <>
      {similarData && similarData.length > 0 && (
        <div className="px-body bg-[#fef8fb]">
          <div className="md:py-12 py-6">
            <div className="text-center">
              <h1 className="sm:text-3xl text-xl font-bold">WATCH AND SHOP</h1>
            </div>
            <div className="  justify-center items-center relative  md:py-12 py-6 ">
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
                    {similarData &&
                      similarData.length > 0 &&
                      similarData.map((item: any, idx: number) => {
                        return (
                          <div key={idx}>
                            <WatchShopCard />
                            {/* <ProductCard product={item} mx={2.5} /> */}
                          </div>
                        );
                      })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WatchShopSlider;
