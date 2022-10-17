import React from "react";
const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative left-[5vw]  z-20">
          <h1 className="text-4xl w-[10ch] font-bold font-serif">
            Welcome to Lenster 👋
          </h1>
          <p className=" mt-4 text-[15px] w-[50ch] leading-loose font-serif">
            Lenster is a decentralized, and permissionless social media app
            built with Lens Protocol 🌿
          </p>
        </div>
        <div className="w-[50vw] max-w-[900px] relative z-10 h-[500px] bg-white "></div>
      </div>
      <div className="z-20 w-[50vw] max-w-[900px] top-20  h-[100%] absolute -right-0 ">
        <img
          src="./logo.png"
          alt="camera"
          className="object-cover w-[100%] h-[300px]"
        />
      </div>
    </>
  );
};

export default Intro;
