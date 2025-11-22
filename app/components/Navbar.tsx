import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuMessageCircleMore } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { TfiAnnouncement } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      {/* Search Box */}
      <div className="hidden md:flex justify-center items-center gap-2 text-xs ring-[1.5px] ring-gray-300 px-2 rounded-full">
        <span>
          <CiSearch className="w-5 h-5" />
        </span>
        <input type="text" placeholder="Search..." name="" id=""  className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>

      {/* Icons/user */}
      <div className="flex gap-5  items-center justify-end w-full">
        <span className=" rounded-full items-center flex justify-center">
          <LuMessageCircleMore className="h-5 w-5" />
        </span>
        <span className=" rounded-full items-center flex justify-center ">
          <TfiAnnouncement className="w-5 h-5 relative" />
          <span className="absolute top-[15] right 0-3 w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">
            1
          </span>
        </span>
        <div className="flex ">
          <div className="flex flex-col mr-1">
            <span className="text-xs leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div>
          <span className=" rounded-full items-center flex justify-center">
            <RxAvatar className="w-8 h-8" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
