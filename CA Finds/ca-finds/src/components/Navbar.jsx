import React from "react";

const Navbar = () => {

  return (
      <>
        <header
          className="absolute top-[0px] right-[0px] w-[1536px] h-[85px] text-left text-lg text-black font-poppins"
          id="Top Bar"
        >
          <div className="absolute top-[0px] left-[0px] bg-gray w-[1536px] h-[85px]" />
          <button className="cursor-pointer py-2.5 px-5 bg-[transparent] absolute top-[19px] left-[1192px] rounded-3xs box-border w-[100px] overflow-hidden flex flex-row items-center justify-center border-[1.5px] border-solid border-fs-search-primary">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26px] font-bold font-poppins text-fs-search-primary text-center inline-block">
              Login
            </button>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-5 bg-fs-search-primary absolute top-[19px] left-[1308px] rounded-3xs w-[100px] overflow-hidden flex flex-row items-center justify-center box-border">
            <b className="relative text-base leading-[26px] font-poppins text-fs-search-button-text text-center">
              Register
            </b>
          </button>
          <div className="absolute top-[11px] left-[598px] flex flex-row items-start justify-start p-4">
            <b className="relative leading-[30px]">Blogs</b>
          </div>
          <img
            className="absolute top-[calc(50%_-_22.5px)] left-[127px] w-[138px] h-[45px] object-cover"
            alt="cafinds.com"
            src="../images/logo1.png"
          />
          <div className="absolute top-[11px] left-[689px] h-[62px] flex flex-row items-center justify-start p-4 box-border gap-[2px]">
            <b className="relative">About</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt="cafinds.com"
              src="../images/down-arrow.svg"
            />
          </div>
          <div className="absolute top-[11px] left-[297px] h-[62px] flex flex-row items-center justify-start p-4 box-border gap-[2px]">
            <b className="relative">Solutions</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="../images/down-arrow.svg"
            />
          </div>
          <div className="absolute top-[11px] left-[450px] h-[62px] flex flex-row items-center justify-start p-4 box-border gap-[2px]">
            <b className="relative">Features</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="../images/down-arrow.svg"
            />
          </div>
        </header>
      </>
  );
};

export default Navbar;
