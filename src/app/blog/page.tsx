import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-5 py-10">
      <Link href="/blog/testId" className="flex gap-20 items-center">
        <div className="h-[200px]  w-[500px] relative rounded-md overflow-hidden">
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex  flex-col gap-5 justify-center">
          <h1 className="text-4xl font-bold ">Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sint
            sunt nisi omnis blanditiis quam architecto doloribus? Sequi possimus
            repellat, a minus sapiente optio odit molestiae quos eaque, tempora
            eligendi!
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className="flex gap-20 items-center">
        <div className="h-[200px]  w-[500px] relative rounded-md overflow-hidden">
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-4xl font-bold ">Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sint
            sunt nisi omnis blanditiis quam architecto doloribus? Sequi possimus
            repellat, a minus sapiente optio odit molestiae quos eaque, tempora
            eligendi!
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className="flex gap-20 items-center">
        <div className="h-[200px]  w-[500px] relative rounded-md overflow-hidden">
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-4xl font-bold ">Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sint
            sunt nisi omnis blanditiis quam architecto doloribus? Sequi possimus
            repellat, a minus sapiente optio odit molestiae quos eaque, tempora
            eligendi!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
