"use client";
import Link from "next/link";
// import logo from "../../images/MedX-Pharmacy-Logo-R-01 1 (1).svg";
// import Logo from "../../images/Group 34330.png"
// import logo from "../../images/Frame 34430.svg";
import logo from "../../images/Frame 34284.svg";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useEffect, useState, Fragment } from "react";
import NavMobile from "../navMobile/NavMobile";
import SearchHeader from "../searchHeader/SearchHeader";
import { usePathname } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserData } from "../../utils/databaseService";
import Image from "next/image";
import Categories from "./categories/navCategories";
import { getUserCartDetails } from "../../utils/cartUtilities/cartUtility";
import { initializeCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { auth } from "../../config/firebase-config";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import useDebounce from "../../utils/useDebounce";
import { handleTypesenseSearch } from "../../config/typesense";
import FlatIcon from "../flatIcon/flatIcon";
import Modal from "../Modal/modal";
import SearchResults from "../SeachResults/SearchResults";
import { addCartObjToUser, fetchSingleProduct, } from "../../utils/databaseService";
import { useAppSelector } from "../../redux/hooks";
import SideMenuLogin from "../sideMenuLogin/SideMenuLogin";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
// import { Image } from "next/image";
// import { usePathname } from "next/navigation";
// import { log } from "console";
import {
  addToCart,
  getCartObj,
  getPriceListCartObj,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import {
  closeLoginModal,
  openLoginModal,
} from "../../redux/slices/loginModalSlice";
import { deleteCookie } from "cookies-next";
import { dividerClasses } from "@mui/material";

const NavbarClient = ({ cookie }: any) => {
  const isLoginOpen = useAppSelector(
    (state: any) => state.loginReducer.isLoginOpen
  );
  const [showLogin, setShowLogin] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const mobile = useMediaQuery("(max-width:1080px)");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isCalorieCalculatorOpen, setIsCalorieCalculatorOpen] = useState(false);
  const [isPrescriptionUpload, setIsPrescriptionUpload] = useState(false);
  const matches = useMediaQuery("(max-width:767px)");
  const dispatch = useDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const debouncedSearch = useDebounce(searchQuery, 500);
  const queryClient = useQueryClient();
  const router = useRouter();
  const [variant, setVariant] = useState(0);
  // console.log(pathname,"name");

  const handleLoginClick = () => {
    // setShowLogin(true);

    dispatch(openLoginModal());
    setShowLogin(true);
    document.body.classList.add("no-scroll");
  };


  const closeLoginMenu = () => {
    setShowLogin(false);
    dispatch(closeLoginModal());
    document.body.classList.remove("no-scroll");
  };

  async function getCart() {
    const cart = await getUserCartDetails(cookie);
    dispatch(initializeCart(cart));
  }
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(cookie),
    // 
    // keepPreviousData: true,
    enabled: isClient,
  });
// console.log(cookie,"cookie");

  // console.log(userData,"userData---------->");

  // const {
  //   data: searchData,
  //   isFetching,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["search", searchQuery],
  //   queryFn: () => handleTypesenseSearch(searchQuery),
  //   keepPreviousData: false,
  //   
  // });

  // console.log(searchData,"saearch data---------");


  async function fetchSearchedProducts(searchquery: any) {
    // console.log(searchquery, "fdgfdh");
    let res: any
    if (debouncedSearch) {
      res = await handleTypesenseSearch(searchquery);
      // console.log(res, "res from fetchSearchedProducts");
    }
    if (res) {
      setSearchedProducts(res);
    }
  }

  async function handleLogout() {
    signOut(auth)
      .then(async () => {
        toast.success("Logged out");
        await axios.get(`/api/logout`);
        queryClient.invalidateQueries({ queryKey: ["userData"] });
        queryClient.refetchQueries({ queryKey: ["userData"] });
        // Sign-out successful.
        deleteCookie("uid");
        router.replace("/");
      })
      .catch((error) => {
        // An error happened.
        toast.error("cannot Logout at the moment");
      });
  }



  useEffect(() => {
    if (isClient) {
      getCart();
    }
    setIsClient(true);
  }, [isClient]);

  useEffect(() => {
    if (searchQuery === "") {
      // console.log("inside if");
      setSearchedProducts([]);
    }
    if (debouncedSearch) {
      console.log("inside else");
      // console.log(debouncedSearch,"debouncedSearch------------------>");
      fetchSearchedProducts(debouncedSearch);
      // fetch(`/api/search?q=${debouncedSearch}`);
    }
  }, [debouncedSearch]);


  const searchResultsHandler = (query) => {
    // console.log(query,"from searchResultsHandler function");

  }
  async function addItemToCart(product:any) {
    console.log(product,"from addItemToCart start");

    let data: any = {
      product,
      productID: product?.id,
      // quantity: quantity,
      index: variant,
      isPriceList: product?.isPriceList,
    };
    // console.log("inside");

    const cartObject = product?.isPriceList
      ? getPriceListCartObj({
        product: product,
        quantity: 1,
        index:  data.index,
      })
      : getCartObj({
        product: product,
        productID: product?.productDocId,
        quantity: 1,
      });
    if (auth.currentUser) {
      const docId = await addCartObjToUser(cartObject);
      cartObject["id"] = docId;
    }
    dispatch(addToCart(cartObject));
    // console.log(" end");
  }
  return (
    <>
      {matches ? (
        <NavMobile />
      ) : (
        <>
          <div className="bg-primary text-white py-2 text-sm font-semibold w-full px-body z-10 ">
            <div className="flex items-center   w-full  justify-between lg:gap-5  ">
              <div className="flex items-center lg:gap-8 gap-4 lg:w-1/3 w-[18%] ">
                <div> <FlatIcon className="flaticon-facebook lg:text-base text-sm" /> </div>
                <div> <FlatIcon className="flaticon-twitter lg:text-xl text-lg" /></div>
                <div> <FlatIcon className="flaticon-instagram lg:text-lg text-base" /></div>
                <div> <FlatIcon className="flaticon-youtube lg:text-xl text-lg" /></div>
              </div>
              {/* <div className="flex justify-center  w-2/3 border border-white">
                <span className="text-secondary font-bold">New Users Only</span>
                <span>All India Free Delivery + 15% Extra Discount </span>
                <span className="text-secondary font-bold"> Code: SHE15</span>
              </div> */}
              <div className="flex justify-center gap-2 items-start  lg:w-2/3 w-[64%]  xl:text-sm text-xs ">
                <p className="text-secondary font-bold">New Users Only </p>
                <p>All India Free Delivery + 15% Extra Discount </p>
                <p className="text-secondary font-bold"> Code: SHE15</p>
              </div>
              <div className="flex items-center justify-end gap-8 lg:w-1/3 w-[18%]   xl:text-sm text-xs ">
                <div className="flex items-center gap-2">
                  <h4>English</h4>
                  <FlatIcon className="flaticon-arrow-down text-[10px] text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <h4>INR</h4>
                  <FlatIcon className="flaticon-arrow-down text-[10px] text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="z-10  ">
            {/* nav header section  */}
            <div className="flex text-sm  font-semibold   bg-white  w-full px-body   ">
              <div className=" w-full   ">
                <div className="  flex items-center w-full  justify-between   ">
                  <div className="min-h-[100px] flex items-center   w-[30%]  ">
                    {/* {isSearchOpen ? ( */}
                    <Transition
                      appear={true}
                      show={true}
                      // show={isSearchOpen}
                      className={
                        "w-full z-40 h-full flex items-center justify-center "
                      }
                    >
                      <Transition.Child
                        className="transition duration-300 w-full h-full flex items-center"
                        enter="ease-in-out"
                        enterFrom=" opacity-0"
                        enterTo=" opacity-100"
                        leave="ease-out"
                        leaveFrom=" opacity-100"
                        leaveTo=" opacity-0"
                      >
                        <div className="relative w-full h-full flex items-center border border-[#999999] px-4 justify-between gap-3 search-container z-10 ">
                          {/* <div className="flex w-full gap-3 items-center border border-[red]"> */}
                          <div><FlatIcon className={"flaticon-camera  text-xl text-[#999999]"} /></div>
                          <input
                            type="text"
                            placeholder="What are you Looking for"
                            name=""
                            id=""
                            value={searchQuery}
                            className="py-3 px-4  w-full outline-none focus:border-none  bg-transparent "
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              console.log(searchQuery, "searchQuery from input field");
                              // searchResultsHandler(searchQuery)

                            }}
                          />
                          <div><FlatIcon className={"flaticon-search  text-xl text-[#999999]"} /></div>
                          {/* code before change start */}
                          {/* <Link
                            href={`/search?q=${searchQuery}`}
                            onClick={() => {
                              // setSearchedProducts([]);
                            }}
                          >
                            <button className="bg-black text-white px-4 py-3 rounded-tr-lg rounded-br-lg">
                              Search
                            </button>
                          </Link> */}
                          {/* code before change end */}
                          {/* </div> */}
                          {
                            searchedProducts.length !== 0 &&
                            pathname !== "/search" && (
                              <div className="absolute top-[45px] left-0 rounded-lg  shadow-md bg-white w-full lg:min-h-[100px] lg:max-h-[500px] overflow-y-auto  px-4 flex flex-col py-4 gap-3  ">
                                {/* <div> */}
                                {searchedProducts?.map((prod, idx) => {
                                  return (
                                    // <Link
                                    //   key={idx}
                                    //   href={`/product/${prod?.slug?.name}`}
                                    // >
                                    <div className=" flex justify-between items-center  border-t-gray-300  border-t py-4 " key={idx}>
                                      <div className=" flex w-[100%] gap-x-3 ">
                                        <div className="w-[40%] h-[80px] "><Image src={prod.coverPic?.url} alt="" height={1000} width={1000} className="object-fill" style={{height:"100%",width:"100%",aspectRatio:"auto"}}/></div>
                                        <div className="flex flex-col gap-y-1.5 w-[60%]">
                                          <h1 className="xl:text-sm text-xs font-medium truncate">{prod?.prodName}</h1>
                                          <h4 className="text-gray-500  text-xs font-medium"><span>1.3lb</span>/<span>vanilla</span></h4>
                                          {/* <div className=" font-bold text-xl"> <span>AED 150.00</span> <span className="text-sm text-gray-500">200 AED</span></div> */}
                                          <div className="flex lg:flex-row flex-col lg:items-center gap-x-2 font-bold xl:text-base text-sm truncate"> <h1>AED 150.00</h1><h3 className="text-sm text-gray-500 font-medium">200 AED</h3></div>
                                        </div>
                                      </div>
                                      <div className="w-[20%] flex justify-end">
                                        <div
                                          onClick={() => {
                                            addItemToCart(prod)
                                          }}
                                          className=" shadow-lg  rounded-md h-[30px] w-[30px]  text-lg text-gray-500 flex justify-center items-center cursor-pointer">
                                            <FlatIcon icon={"flaticon-plus-1  font-normal text-xs "} />
                                            {/* + */}
                                            </div>
                                      </div>
                                    </div>
                                    // </Link>
                                  );
                                })}
                                {/* </div> */}
                              </div>
                            )}
                          {/* {searchQuery&&<SearchResults/>} */}
                        </div>
                      </Transition.Child>
                    </Transition>
                  </div>
                  {/* // ) : ( */}
                  <div className=" w-[30%] flex justify-center">

                    <Link href={"/"}>
                      <Image
                        src={logo}
                        alt=""
                        className=" "
                        width={1000}
                        height={1000}
                        style={{
                          aspectRatio: "auto",
                          width: "150px",
                          height: "auto",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="flex items-center justify-end gap-7  w-[30%]">
                  {cookie?.value || (userData.length>0) ? (
                    UserDropDown(userData, handleLogout)
                  ) : !isLoginOpen ? (
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={handleLoginClick}
                    >
                        <FlatIcon icon={"flaticon-user-fill text-2xl"}/>
                      <h3>Login</h3>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FlatIcon icon={"flaticon-user-fill text-2xl"}/>
                      <h3>Login</h3>
                    </div>
                  )}
                    <Link href={"/wishlist"}>
                      <div className="cursor-pointer"><FlatIcon icon={"flaticon-heart-fill text-2xl "} /></div>
                    </Link>
                    <Link href={"/cart"} className="flex items-center  gap-2 cursor-pointer relative">
                      <FlatIcon icon={"flaticon-bag-fill text-2xl"} />
                      <div className="h-[15px] w-[15px] rounded-full bg-primary absolute top-0 -right-1 flex items-center justify-center text-[8px] text-white">1</div>
                      {/* <h3>My Cart</h3> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Categories />
            <Modal
              isOpen={isPrescriptionUpload}
              setOpen={setIsPrescriptionUpload}
            >
              <div className="bg-white">Prescription</div>
            </Modal>
          </div>
        </>
      )}
      {isClient && isLoginOpen && (
        <SideMenuLogin
          isOpen={isLoginOpen}
          setShowLogin={setShowLogin}
          onClose={closeLoginMenu}
        />
      )}
      {/* {!matches2 && <Categories />} */}
    </>
  );
};

export default NavbarClient;



function UserDropDown(userData: any, handleLogout: any): React.ReactNode {
  return (
    <div className=" flex items-center justify-center">
      <Menu
        as="div"
        className="relative text-left flex justify-center items-center "
      >
        <div className="flex justify-center items-center">
          <Menu.Button className="">
            <div className="flex items-center  gap-2">
            <FlatIcon icon={"flaticon-user-fill text-2xl"}/>
              {(userData && userData?.name) || "User "}
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-2 top-full w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link href={"/profilepage"}>
                    <button
                      className={`${active ? "bg-primary text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {/* {active ? "active" : "notActive"} */}
                      Profile
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${active ? "bg-primary text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {/* {active ? "active" : "notActive"} */}
                    Logout
                  </button>
                )}
              </Menu.Item>

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}