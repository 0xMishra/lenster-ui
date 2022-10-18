import React from "react";
import Post from "./post";
const Posts = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="mt-[220px] relative -top-64 z-30 flex-col justify-center items-center">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="hidden lg:flex w-[50vw] max-w-[300px] bg-white relative z-30 "></div>
    </section>
  );
};

export default Posts;
