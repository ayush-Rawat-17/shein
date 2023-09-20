"use client";
import React, { useEffect } from "react";
import OutsideClickHandler from "../../utils/OutsideClickHandler";

const Modal = ({ isOpen, children, setOpen }) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="absolute z-50  flex justify-center items-center top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.5)] overscroll-none">
      <OutsideClickHandler
        onClick={() => {          
          setOpen(false);
        }}
      >
        {children}
      </OutsideClickHandler>
    </div>
  );
};

export default Modal;
