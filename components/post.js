import React from "react";
import ForumIcon from "@mui/icons-material/Forum";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
const Post = () => {
  return (
    <div
      // key={id}
      className=" rounded-lg overflow-hidden w-[88vw] max-w-[700px]  bg-[transparent] mx-3 md:mx-0 lg:mx-0
        border-[1px] border-gray-300 border-solid  
        flex justify-center  flex-col
        m-7
      "
    >
      <p className="text-sm px-7 pt-1 font-light text-gray-900">
        <span className="text-gray-502">
          <SwapHorizIcon />
        </span>{" "}
        nader mirrored this post
      </p>
      <div className="w-[98%] flex justify-between p-3">
        <div className="flex">
          <div
            className="rounded-full h-14 w-12 bg-gray-500 flex items-center justify-center overflow-hidden
                 
            "
          >
            <img
              src="https://ik.imagekit.io/lensterimg/tr:n-avatar,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmY7WEGzavjdh9zmLyFTdGj4FvTgjB58Mdvaky9p3NvdiF "
              alt="profilepic"
              className="w-14 h-12 object-cover rounded-full"
            />
          </div>

          <div className="ml-4">
            <p className="text-sm px-5">timestamp</p>
            <p className="text-sm pl-5 pt-1 text-[#8b5cf6]">@nader.lens</p>
          </div>
        </div>

        <span class="px-4 hover:bg-gray-300 cursor-pointer rounded">
          <i class="fas fa-ellipsis-h pt-4 text-lg"></i>
        </span>
      </div>
      <div class="mb-6 flex-col px-5 mt-8 justify-center items-center ">
        <div class=" text-sm  px-7 leading-8 text-start">
          Hearing some big producers are behind it (Timberland etc). Music & art
          are a serious vibe. I will share which track I end up buying here
          soon. Can't
        </div>
        <img
          class=" bg-cover h-[248px] w-[90%] px-5 mt-6 mb-1 rounded-lg object-cover"
          src="https://ik.imagekit.io/lensterimg/tr:n-avatar,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/QmY7WEGzavjdh9zmLyFTdGj4FvTgjB58Mdvaky9p3NvdiF"
        />
        <span class=" px-7  text-sm ">
          {/* {user.slice(-2, 4) + "..." + user.slice(39, 42)} */}
          hello
        </span>
      </div>

      <div className="flex px-7  border-t-2 border-b-2 border-b-gray-300 border-t-gray-300 w-[90%]  mx-5 py-4">
        <p className=" pr-7">
          <span className="text-sm font-bold">2 </span>mirrors
        </p>
        <p className="px-7">
          <span className="text-sm font-bold">30 </span>likes{" "}
        </p>
        <p className="px-7">
          <span className="text-sm font-bold">3 </span>collects
        </p>
      </div>

      <div className="flex w-[88%] px-5 mx-5 py-4 text-xs">
        <div className="pr-10 text-blue-500 ">
          <ForumIcon />
        </div>
        <div className="px-10 text-[#8b5cf6]">
          <SwapHorizIcon />
        </div>
        <div className="px-10 text-pink-600">
          <FavoriteBorderIcon />
        </div>
        <div className="px-10 text-red-600">
          <UnarchiveIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
