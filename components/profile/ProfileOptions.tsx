

"use client";
import React from "react";
import { useState,useEffect } from "react";
import Image from "next/image";
import profilePic from "../../images/Ellipse 77.svg"
import FlatIcon from "../flatIcon/flatIcon";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserData } from "../../utils/databaseService";
import { db } from "../../config/firebase-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileOptions = ({cookie}) => {
  // console.log(userId,"user id");
  const [isClient, setIsClient] = useState(false);
  const [loading,setLoading]=useState(false)
  const client = useQueryClient()
  const pathname = usePathname();
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(null),
    refetchInterval: 2000,
    keepPreviousData: true,
    // enabled: isClient,
  });
  // console.log(userData,"data");

// console.log(userData?.dP,"from oprtion ---->");

  


  const uploadImage = async (userPic: any) => {
    if (userPic) {
setLoading(true)
      console.log("inside if start")
      // console.log(userPic,"FROM upload img");
      let timeStamp = (new Date()).getMilliseconds()
        // console.log(userPic, "inside if pic")
        const userId = await userData.id
        // console.log(userId,"user id from if");
        const storage = getStorage();
        const storageRef = ref(storage, `users/${userId}/images/${(userPic.name)}___${timeStamp}`);
        await uploadBytes(storageRef, userPic).then(async (snapshot) => {
            await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                await setDoc(doc(db, "users", userId), { dP: downloadURL }, { merge: true })
console.log(downloadURL,"url");

            })
        })
        console.log("inside if end")
setLoading(false)
    } else {
        console.log("insile else")

    }
}
async function uploadTask(userPic: any) {
  // setLoading(true)
  // console.log(userPic,"FROM uploadTask");
  await uploadImage(userPic)
  client.refetchQueries({ queryKey: ['userData'] })
  // setLoading(false)

}
useEffect(() => {
  setIsClient(true);
}, []);
  return (
    <>
      <div className=" flex-[0.25] filter-border  h-fit ">
<div className="flex flex-col items-center mt-5 mb-7">
    <div className="border border-[#EEEEEE] rounded-full p-2 mb-2">
      <div className=" rounded-full  relative" >
      <Image src={isClient&&userData?.dP} alt="" width={1000} height={1000} style={{aspectRatio:"auto",width:"110px",height:"110px"}} className="rounded-full"/>
      <div className="absolute bottom-0 right-0">
      <input placeholder='Destination Image' type='file' accept="image/*" onChange={async (e) => {
        // console.log(e.target.files[0],"from input");
                  await uploadTask(e.target.files[0])
                }} id="Destination-Image" className='w-full hover:cursor-pointer   outline-none px-[10px] py-[7px] hidden rounded-md border-[#bcbcbc] border-[1px]' />
                <label htmlFor='Destination-Image' className='hover:cursor-pointer '>v</label>
      </div>
      </div>
    </div>
    <h5 className="text-secondary font-semibold text-sm mb-1">
      {isClient&&userData?.name} {isClient&&userData?.lastName&&userData?.lastName}
      {/* Arjun Rawat */}
      </h5>
    <h6 className="text-[#555555] font-medium text-sm">
      {isClient&&userData?.email}
      {/* rajun.rawat@gmail.com */}
      </h6>
    </div>     
    {/* <Link href={"/profilePage"}> */}
        <div className='flex gap-3 items-center border-t border-t-[#EEF0F5] border-b border-b-[#EEF0F5] py-4 px-6'>
     <div><FlatIcon icon={`flaticon-user-fill  font-normal text-2xl cursor-pointer  ${pathname.includes("profilepage")&&"text-primary"}`} /></div>
     <h4 className={` font-semibold text-sm ${pathname.includes("profilepage")&&"text-primary"}`}>Profile Info</h4>
 </div>
 {/* </Link> */}
 <Link href={"/wishlist"}>
 <div className='flex gap-3 items-center  border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer hover:text-primary  text-secondary'>
     <div><FlatIcon icon={"flaticon-heart  font-normal text-2xl "} /></div>
     <h4 className={` font-semibold text-sm ${pathname.includes("wishlist")&&"text-primary"} `}>My Wishlist</h4>
 </div>
 </Link>
 <div className='flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer hover:text-primary text-secondary'>
     <div><FlatIcon icon={"flaticon-bag  font-normal text-2xl hover:text-primary "} /></div><h4 className=" font-semibold text-sm ">My Order</h4>
 </div>
 <div className='flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer text-secondary hover:text-primary '>
     <div><FlatIcon icon={"flaticon-location  font-normal text-2xl"} /></div><h4 className=" font-semibold text-sm">Addresses</h4>
 </div>
 <div className='flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer text-secondary hover:text-primary'>
     <div><FlatIcon icon={"flaticon-card  font-normal text-2xl"} /></div><h4 className=" font-semibold text-sm">Payment Method</h4>
 </div>
 <Link href={"/contact"}>
 <div className='flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer text-secondary hover:text-primary'>
     <div><FlatIcon icon={"flaticon-chat  font-normal text-2xl"} /></div><h4 className=" font-semibold text-sm">Help and Support</h4>
 </div>
 </Link>
 <Link href={"/referandearn"}>
 <div className='flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer text-secondary hover:text-primary'>
     <div><FlatIcon icon={"flaticon-chat  font-normal text-2xl"} /></div><h4 className=" font-semibold text-sm">Refer and Earn</h4>
 </div>
 </Link>
 <div className='flex gap-3 items-center   py-4 px-6 cursor-pointer text-secondary hover:text-primary'>
     <div><FlatIcon icon={"flaticon-logout  font-normal text-2xl"} /></div><h4 className=" font-semibold text-sm">Logout</h4>
 </div>
 
      </div>
      {
        loading&&   <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-30 flex justify-center items-center ">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      }
    </>
  );
};

export default ProfileOptions;
