"use client";
import React from "react";
import Image from "next/image";
import videoImg from "../../images/0c8ce2ac-59a4-444a-b6ac-09a3637f205d.svg";
import VideoMiniCard from "../HomePage/videoCard/VideoMiniCard";
import playButton from "../../images/Group 1830.svg";

const WatchShopCard = () => {
  return (
    <>
      <div
        className={`flex flex-col mx-2.5 relative   bordered-shape overflow-hidden cursor-pointer`}
      >
        <div className="  product-card relative">
          <Image
            src={videoImg}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-fit"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Image
              src={playButton}
              alt=""
              width={1000}
              height={1000}
              className="aspect-auto w-[60px] h-[60px]"
            />
          </div>
          <VideoMiniCard />
        </div>
      </div>
    </>
  );
};

export default WatchShopCard;
