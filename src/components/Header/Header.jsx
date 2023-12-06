import React from "react";
import icon1 from "../../assets/Header/legal-rumble-2-logo.png";
import icon2 from "../../assets/Header/secure-icon-png-30.png";
import icon3 from "../../assets/Header/Asset-144.png";
import icon4 from '../../assets/Header/pngegg-1.png'
import icon5 from '../../assets/Header/pngegg.png';

export default function Header()  {
  return (
    <>
      <div className="bg-[#10324E] flex  justify-around text-[#FFFFFF] items-center">
        <div className="flex flex-row gap-10 items-center">
          <img className="w-[182px] h-[53.31px]" src={icon1} alt="" />
          <div className="flex flex-row gap-10">
            <img className="w-[25px] h-[25px]" src={icon2} alt="" />
            <p>Premium+</p>
            <p>Blogs</p>
            <div className=" flex flex-row">
              <img className="w-[31px] h-[30px]" src={icon3} alt="" />
              <p>Podcast</p>
            </div>
          </div>
        </div>
        <div className="flex  flex-row gap-10 text-black">
            <img className="w-[40px] h-[40px]" src={icon4} alt="" />
            <img className="w-[40px] h-[40px]" src={icon5} alt="" />
            <button className="bg-[#EDA404] px-8 py-1 rounded-xl">
                Login
            </button>
            <button className="bg-[#FFFFFF] px-8 py-1 rounded-xl">
                Sign Up
            </button>
        </div>
      </div>
    </>
  );
};

