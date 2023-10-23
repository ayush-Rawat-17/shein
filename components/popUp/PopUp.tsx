"use client"
import React,{useState} from 'react'
import disCountImg from "../../images/10%off.png"
import beautyImg from "../../images/fashionable-beautiful-stylish-woman-fashion-black-clothes-with-black-sunglasses-long-coat-tshirt-jeans-purse-walking-street 1.png"
import FlatIcon from '../flatIcon/flatIcon'
import Image from 'next/image'
import logo from "../../images/Frame 34284.svg";
import img from "../../images/off.png";
import disImg from "../../images/10%off.svg"
import check from "../../images/Vector 28.svg";
import { toast } from 'react-toastify'

const PopUp = ({  setShowPopup}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputData,setInputData]=useState("")

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
      };

      const onSubmitHandler=()=>{
        if(inputData){
          toast.success("Success.")
          setInputData("")
        }else{
          toast.error("Please enter email.")
        }
      }
    return (
        <div>
            <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-50 flex justify-center items-center">
                <div className="xl:w-[70%] lg:w-[80%] md:w-[50%] sm:w-[70%] w-[90%] h-auto    flex flex-col justify-end gap-y-3 ">
                    <div className="w-full flex justify-end items-center"
                        onClick={() => {
                          setShowPopup((prev) => !prev);
                        }}
                    ><button className="bg-white w-[20px] h-[20px] rounded-full flex justify-center items-center"><FlatIcon icon={"flaticon-close text-primary font-bold text-[10px]"} /></button>
                    </div>
                    <div className="flex  w-full h-auto  bg-white " >
                        <div className='lg:w-[50%] w-[100%] xl:px-10 sm:px-5 px-3 '>
                            <div className='w-full my-3 xl:my-6 md:my-4 relative '>
                                <div className=" flex justify-center  ">
                                    <Image
                                        src={logo}
                                        alt=""
                                        className="aspect-auto xl:w-[130px] w-[100px]  h-auto "
                                        width={1000}
                                        height={1000}
                                        // style={{
                                        //     aspectRatio: "auto",
                                        //     width: "150px",
                                        //     height: "auto",
                                        // }}
                                    />
                                </div>
                                <div className='xl:my-7 my-4 flex flex-col gap-2'>
                                <div className='flex justify-center text-secondary xl:text-lg sm:text-base text-sm font-semibold'><p>Get Your Entire Order For</p></div>
                                <div className=" flex justify-center ">
                                    <Image
                                        src={img}
                                        alt=""
                                        className="aspect-auto xl:w-[200px] w-[150px] h-auto "
                                        width={1000}
                                        height={1000}
                                        
                                        // style={{
                                        //     aspectRatio: "auto",
                                        //     width: "250px",
                                        //     height: "auto",
                                        // }}
                                    />
                                </div>
                                {/* <div className='flex items-center justify-center sm:text-base text-sm font-semibold mt-2 '><h3 className='text-center'>Use <span className='text-primary'>'Coupon Code'</span> this coupon to avail your offer</h3></div> */}
                                </div>
                                <div className='flex justify-center text-[#838383] mb-4 lg:text-base text-sm '>Enter your email address</div>
                                <div className='grid sm:grid-cols-4 grid-cols-2 items-center justify-center gap-3 xl:text-sm text-xs text-primary font-medium '>
                                    <div className='border border-primary  rounded-md flex justify-center items-center py-1'><p>Clothing</p></div>
                                    <div className='border border-primary  rounded-md flex justify-center items-center py-1'><p>Footwear</p></div>
                                    <div className='border border-primary   rounded-md flex justify-center items-center py-1'><p>Accessories</p></div>
                                    <div className='border border-primary  rounded-md flex justify-center items-center py-1'><p>Bags</p></div>
                                </div>
                                <div className='w-full my-4 pop-up-email'><input type="email" placeholder='E-mail' className=' border border-[#838383] w-full py-2 px-5 outline-0' value={inputData} onChange={(e)=>setInputData(e.target.value)}/></div>
                               
                                <div className="flex start gap-2 mb-5">
                <div
                  className={`w-5 h-5 border-2 rounded-sm cursor-pointer flex justify-center items-center ${isChecked
                    ? "bg-primary border-primary"
                    : "bg-white border-gray-400"
                    }`}
                  onClick={() => toggleCheckbox()}
                >
                  {isChecked && (
                    <Image
                      src={check}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  )}
                </div>
                <div className="sm:text-sm text-xs w-fit text-secondary font-semibold">By signing in, You agree to our <span className=" text-primary">Terms and Conditions</span> and <span className=" text-primary">Privacy Policy.</span></div>
              </div>

                                {/* <div className="sm:text-sm text-xs w-fit">By signing in, You agree to our <span className=" text-primary">Terms and Conditions</span> and <span className=" text-primary">Privacy Policy.</span></div> */}
                                <div onClick={()=>{onSubmitHandler()}} className='bg-secondary text-white flex justify-center items-center py-3 mb-6 lg:text-base sm:text-sm text-xs'><button>Get My Offer</button></div>
                                <div className='  flex justify-center items-center lg:mb-10 mb-5 underline lg:text-base text-sm font-semibold '><button>I Will Pay Full Price</button></div>
                                <div className='text-center text-gray-700 md:text-sm text-xs font-medium' >
                                    <p>*Offer can only be redeemed by new subscribers,By signing</p>
                                    <p>up you agree to recieve emails from <span className='text-gray-700 font-semibold'>Shein Style Store</span></p>
                                    <p className='text-gray-700 font-semibold'>Terms And Conditions</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='w-[50%] lg:block hidden xl:h-[650px] h-[570px]'><Image src={beautyImg} alt="" height={1000} width={1000} className='w-full h-full  ' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp