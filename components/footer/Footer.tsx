"use client";
import React, { useState } from "react";
import logo from "../../images/MedX-Pharmacy-Logo-R-01 2 (1).svg";
import Image from "next/image";
import img1 from "../../images/image 146.svg";
import img2 from "../../images/da1cd32c-33a4-48a2-9873-f45c918d31f5 1.svg";
import img3 from "../../images/image 147.svg";
import img4 from "../../images/Fedex-logo 1.svg";
import img5 from "../../images/pngkit_delivery-com-logo-png_5554386 1.svg";
import codImg from "../../images/image 148.svg";
import americanExpImg from "../../images/pngwing 1.svg";
import masterCardImg from "../../images/MasterCard_Logo 1.svg";
import visaImg from "../../images/visa 3.svg";
import gpayImg from "../../images/google-pay 1.svg";
import paytmImg from "../../images/Paytm-Logo 1.svg";
import FlatIcon from "../flatIcon/flatIcon";
import appStoreImg from "../../images/Group 34287.svg";
import playStoreImg from "../../images/Group 34288.svg";
import facebookImg from "../../images/facebook (2) 1.svg";
import instagram from "../../images/instagram (3) 1.svg";
import pinterest from "../../images/pinterest (1) 1.svg";
import twitter from "../../images/twitter 2.svg";
import { getStoreDetails } from "../../utils/databaseService";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { db } from "../../config/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { toast } from 'react-toastify';
import blacklogo from "../../images/sheinBlack.png";
import Loader from "../loader/Loader";

const DUMMY_DATA = [
  // {
  //   heading: "SHEIN STYLE STORES",
  //   subLinks: [
  //     { name: "About", href: "about" },
  //     { name: "Careers", href: "careers" },
  //     { name: "Influencer Program", href: "influencer-program" },
  //     { name: "Social Responsibility", href: "social-responsibility" },
  //     { name: "Business Enquiries", href: "business-enquiries" },
  //     { name: "Become a Partner", href: "bacome-a-partner" },
  //     { name: "Fraud Alert", href: "fraud-alert" },
  //     { name: "Store Locations", href: "store-locations" },
  //   ],
  // },
  {
    heading: "HELP & SUPPORT",
    subLinks: [
      { name: "FAQS", href: "faqs" },
      { name: "Happy Customers", href: "happy-customers" },
      { name: "Brand Feedback", href: "brand-feedback" },
      { name: "Track Order", href: "track-order" },
      { name: "Size Guide", href: "size-guide" },
      { name: "Loyalty Program", href: "loyality-program" },
      { name: "Store Locations", href: "store-locations" },
    ],
  },
  {
    heading: "OUR SERVICE",
    subLinks: [
      { name: "Return and Exchange", href: "return-and-exchange" },
      { name: "Privacy Policy", href: "privacy-policy" },
      { name: "Terms & Conditions", href: "terms-and-conditions" },
      { name: "Shipping Terms", href: "shipping-terms" },
      { name: "Cookies Policy", href: "cookies-policy" },
      { name: "Accessibility", href: "accessbility" },
    ],
  },
];

const images = [
  { image: img1 },
  { image: img2 },
  { image: img5 },
  { image: img3 },
  { image: img4 },
];

const pyamentModeImages = [
  { image: codImg },
  { image: americanExpImg },
  { image: masterCardImg },
  { image: visaImg },
  { image: gpayImg },
  { image: paytmImg },
];
const Footer = () => {
  const [email, setEmail] = useState("")
  const [loading,setLoading]=useState(false)

  const onSubscribeSumbitHandler = async () => {
    setLoading(true)
    const data = {
      email: email,
      createdAt: new Date(),
    }
    // console.log("data");
    try {
    if (email) {
      console.log("submitted");
      await addDoc(collection(db, "newsletter"), data)
      setLoading(false)
      toast.success("Subscribed !")
      setEmail("")
      
    } else {
    setLoading(false)
      toast.error("Please enter email!")
    } 
    } catch (error) {
    setLoading(false)
    toast.error("Something went wrong!")
      console.log(error);
    }
  }


  const { data: storeData } = useQuery({
    queryKey: ["storeDetails"],
    queryFn: () => getStoreDetails(),
    keepPreviousData: true,
  });
  // console.log(storeData,"storeData");


  return (
    <>
      <div>
        <div className="flex lg:flex-row flex-col flex-col-reverse bg-black">
          <div className="lg:w-[63%]  w-[100%]  ">
            <div className=" sm:pt-10 pt-5 px-[6%] flex sm:flex-row flex-col xl:gap-x-5 gap-x-4 gap-y-4 ">
              {/* <div className="grid  lg:w-[65%] w-[100%] xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:gap-x-5 gap-x-4 gap-y-4 sm:mb-[60px] mb-[40px]  "> */}
              {DUMMY_DATA.map((item: any, idx: number) => {
                return (
                  <div className="sm:w-1/3 flex flex-col gap-4  " key={idx}>
                    <h3 className=" relative font-bold md:text-xl text-base text-white ">
                      {item.heading}
                      <div className="bg-primary   absolute bottom-[-12px] p-[1px] w-[55px] h-[2px]"></div>
                    </h3>
                    <div className="flex flex-col gap-4 mt-4 cursor-pointer">
                      {item.subLinks.map((item: any, idx: number) => {
                        return (
                          <Link key={idx} href={`${item.href}`}>
                            <p className="text-sm text-[#858484] hover:text-white font-medium">
                              {/* <p className="text-sm text-[#fff] font-medium"> */}
                              {item.name}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              <div className="sm:w-1/3  flex flex-col gap-4   ">
                <h3 className=" relative font-bold md:text-xl text-base text-white ">
                  OUR OFFICE
                  <div className="bg-primary   absolute bottom-[-12px] p-[1px] w-[55px] h-[2px]"></div>
                </h3>
                <div className="flex flex-col gap-4 mt-4 text-sm text-[#fff] font-semibold ">
                  {storeData?.storeAddress?.address && (
                    <div className="flex gap-3 cursor-pointer">
                      <div>
                        <FlatIcon className="flaticon-address text-2xl font-bold text-white " />
                      </div>
                      <p>
                        {storeData?.storeAddress?.address}
                      </p>
                    </div>
                  )}
                  {storeData?.storePhone && (
                    <div className="flex gap-3 cursor-pointer">
                      <div>
                        <FlatIcon className="flaticon-contact text-2xl font-bold text-white" />
                      </div>
                      <p>
                        {storeData?.storePhone}
                      </p>
                    </div>
                  )}
                  {storeData?.storeEmail && (
                    <a
                      href={`mailto:${storeData?.storeEmail}`}
                      className="flex gap-3 cursor-pointer"
                    >
                      <div>
                        <FlatIcon className="flaticon-contact-1 text-2xl font-bold text-white" />
                      </div>
                      <p className="line-clamp-1">{storeData?.storeEmail}</p>
                    </a>
                  )}
                  <div className="text-white text-base font-semibold cursor-pointer">
                    <span>Follow us on social media get</span>{" "}
                    <span className="text-primary">1000 Bonus </span>Points *
                    <span></span>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={storeData ? storeData?.facebookUrl : ""}
                      target="_blank"
                    >
                      <div>
                        <Image src={facebookImg} alt="" />
                      </div>
                    </Link>
                    <Link
                      href={storeData ? storeData?.instagramUrl : ""}
                      target="_blank"
                    >
                      <div>
                        <Image src={instagram} alt="" />
                      </div>
                    </Link>
                    <div className="cursor-pointer">
                      <Image src={pinterest} alt="" />
                    </div>

                    <Link
                      href={storeData ? storeData?.twitterUrl : ""}
                      target="_blank"
                    >
                      <div>
                        <Image src={twitter} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" sm:py-[28px] py-[20px] ">
              <div className=" flex lg:flex-row md:flex-col sm:flex-row  w-full xl:gap-x-8 gap-x-4">
              </div>
              <div className="px-[6%]">
              {/* <div className="flex  md:items-center md:flex-row flex-col gap-y-4 justify-between gap-x-3"> */}

                <div className="flex  md:items-center md:flex-row flex-col gap-y-4 justify-between gap-x-3">
                  <div className="flex flex-col">
                    <div className=" md:text-2xl sm:text-xl text-lg font-semibold text-white mb-3">
                      <h2>We Accept</h2>
                    </div>
                    <div className="flex items-center lg:flex-nowrap flex-wrap md:gap-x-6 gap-x-4 gap-y-2 cursor-pointer">
                      {pyamentModeImages.map((item: any, idx: number) => {
                        return (
                          <div key={idx}>
                            <Image src={item.image} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className=" md:text-2xl sm:text-xl text-lg font-semibold text-white mb-3 md:text-end">
                      <h2>Delivery Partners</h2>
                    </div>
                    <div className="flex items-center md:justify-end lg:flex-nowrap flex-wrap md:gap-x-6 gap-x-4  gap-y-2 cursor-pointer">
                      {images.map((item: any, idx: number) => {
                        return (
                          <div key={idx}>
                            <Image src={item.image} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="  h-fit">
              <div className="flex      w-full">
                {/* <div className="bg-[#F6F4F1] text-white  w-full "> */}
                <div className="bg-[#000] text-white  w-full ">
                  <div className="border-b-[1.5px] border-[white] border-line"></div>
                  <div className="flex sm:flex-row flex-col items-center sm:justify-between gap-x-4 gap-y-4  py-5  px-body ">
                    <p className="text-white md:text-base text-sm font-medium text-center w-full ">
                      ©2019-2023 SHEINSTYESTORES INC All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[37%] w-[100%] py-5 lg:py-10 px-body  bg-primary  flex items-center">
            <div className="  h-fit flex flex-col gap-6 sm:gap-8 lg:gap-8  ">
              <div className="w-full flex justify-center">
              <div className="sm:w-[180px] w-[150px] ">
            <Image
                  src={blacklogo}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-full "
                />
                </div>
                </div>
              <h1 className=' text-white lg:text-3xl sm:text-xl text-xl font-bold lg:text-center text-center '>NEWSLETTER</h1>
              <div className="flex flex-col text-white  gap-6 sm:gap-8 lg:gap-16">
                <p className='  font-semibold  md:text-base sm:text-sm text-xs lg:text-center text-center'>Join now and get 10% off on your next purchase and Be the first to know about new collections and exclusive offers. </p>
                <div className='flex p-1 bg-white rounded-md w-[100%] mx-auto justify-between  email-container  items-center '>
                  <div className="w-[70%]">
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                      type='email'
                      className='w-[100%] outline-0 py-3 sm:px-3 px-1 rounded-md text-black' placeholder='Your email address' />
                  </div>
                  {/* <div onClick={() => onSubscribeSumbitHandler()} className='xl:w-[30%] w-[40%] py-3 bg-black text-white flex  rounded-md justify-center gap-2  xl:text-base md:text-sm text-xs font-semibold cursor-pointer'>
                    <button className="" style={{ height: "100%", position: "relative", }}>
                        {loading && (
                                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}>
                                    <Loader />
                                </div>
                            )}
                            {!loading && "SUBSCRIBE"}
                     
                      </button>

                  </div> */}
                
<div onClick={() => onSubscribeSumbitHandler()} className="  xl:w-[30%] w-[40%] h-fit  py-3 bg-black text-white xl:text-base md:text-sm text-xs font-semibold cursor-pointer rounded-md ">
<button className=" w-full text-center  " style={{ height: "100%", position: "relative" }}>
{loading && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Loader />
                  </div>
                )}
                {!loading && "SUBSCRIBE"}
</button>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
