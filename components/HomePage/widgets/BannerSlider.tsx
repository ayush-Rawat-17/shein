"use client";
import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchHomeSections } from "../../../utils/databaseService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { bannerLink } from "../../../utils/bannerLink/bannerLinking";

const BannerSlider = ({ section, myKey }) => {
  const { data: homeData } = useQuery({
    queryKey: ["homeSections"],
    queryFn: fetchHomeSections,
  });
  const slider = useRef<any>(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let arr=homeData?.data?.filter((val: any) => val?.id === section?.widgetID)[0]?.arr

  // console.log(arr,"arr");
  console.log("hii");

  // console.log(homeData,"home data");
  
  
  
  return (
    <div className="relative">
      {homeData &&
        homeData?.data?.filter((val: any) => val?.id === section?.widgetID) &&
        homeData?.data?.filter((val) => val?.id === section?.widgetID) &&
        homeData?.data?.filter((val: any) => val?.id === section?.widgetID)[0]
          ?.arr?.length !== 0 && (
          <div className="w-full">
            <Slider
              ref={slider}
              {...settings}
              nextArrow={<></>}
              prevArrow={<></>}
              className="overflow-hidden"
            >
              {homeData &&
                homeData?.data?.filter(
                  (val: any) => val?.id === section?.widgetID
                ) &&
                homeData?.data?.filter(
                  (val) => val?.id === section?.widgetID
                ) &&
                homeData?.data
                  ?.filter((val: any) => val?.id === section?.widgetID)[0]
                  ?.arr?.map((banner: any, idx: any) => (
                    <div
                      className="h-auto w-full"
                      key={idx}
                      onClick={() => bannerLink(banner)}
                    >
                      <Image
                        src={banner?.image?.org}
                        alt={banner?.image?.caption || "image"}
                        width={1000}
                        height={100}
                        layout="responsive"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
            </Slider>
          </div>
        )}
    </div>
  );
};

export default BannerSlider;

// import React, { useRef } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchHomeSections } from "../../../utils/databaseService";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Image from "next/image";
// import { bannerLink } from "../../../utils/bannerLink/bannerLinking";

// const BannerSlider = ({ section, myKey }) => {
//   const { data: homeData } = useQuery({
//     queryKey: ["homeSections"],
//     queryFn: fetchHomeSections,
//   });
//   const slider = useRef<any>(null);

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Show 3 images at a time in the slider
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="relative">
//       {homeData && homeData?.data?.filter((val: any) => val?.id === section?.widgetID)?.length > 0 && (
//         <div className="w-full">
//           {homeData?.data
//             ?.filter((val: any) => val?.id === section?.widgetID)[0]
//             ?.arr?.length === 1 ? ( // Check if there is only one image
//             <div
//               className="w-full"
//               onClick={() =>
//                 bannerLink(
//                   homeData?.data
//                     ?.filter((val: any) => val?.id === section?.widgetID)[0]
//                     ?.arr[0]
//                 )
//               }
//             >
//               <Image
//                 src={
//                   homeData?.data
//                     ?.filter((val: any) => val?.id === section?.widgetID)[0]
//                     ?.arr[0]?.image?.org
//                 }
//                 alt={
//                   homeData?.data
//                     ?.filter((val: any) => val?.id === section?.widgetID)[0]
//                     ?.arr[0]?.image?.caption || "image"
//                 }
//                 width={1000}
//                 height={100}
//                 layout="responsive"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           ) : (
//             homeData?.data
//               ?.filter((val: any) => val?.id === section?.widgetID)[0]
//               ?.arr?.map((banner: any, idx: any) => (
//                 <div
//                   className={`h-auto w-${100 / homeData?.data
//                     ?.filter((val: any) => val?.id === section?.widgetID)[0]
//                     ?.arr?.length}%`}
//                   key={idx}
//                   onClick={() => bannerLink(banner)}
//                 >
//                   <Image
//                     src={banner?.image?.org}
//                     alt={banner?.image?.caption || "image"}
//                     width={1000}
//                     height={100}
//                     layout="responsive"
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BannerSlider;

