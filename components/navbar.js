import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white border-b-2 border-b-gray-200 w-[100vw] flex justify-center items-center h-8 pt-12   fixed   z-40 pb-3">
      <div className=" z-40 flex justify-between items-center   fixed  w-[100vw]  mb-10 max-w-[1100px] bg-white">
        <ul className="pl-2 flex justify-center items-center  ">
          <li>
            <img
              src="https://lenster.xyz/logo.svg"
              className="h-8 w-8 object-cover mr-9"
              alt=""
            />
          </li>
          <li className="text-sm font-semibold  py-1 rounded-lg   px-5 bg-gray-200">
            Home
          </li>
          <li className="text-sm font-semibold px-5">Explore</li>
          <li className="text-sm font-semibold px-5">More</li>
        </ul>
        <ul className="pr-3">
          <li>
            <button className="text-sm py-2 rounded-lg  font-bold px-4 text-white bg-[#8B5CF6] flex justify-center">
              <img
                src="https://lenster.xyz/lens.png"
                className="w-5 h-5 object-cover mr-2"
                alt=""
              />
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
