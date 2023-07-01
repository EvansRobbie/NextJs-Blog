import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className="flex flex-col gap-5 py-10">
      {
        data.map((blog:any) =>(

          <Link href={`/blog/${blog._id}`} className="flex gap-20 items-center" key={blog.id}>
            <div className="h-[200px]  w-[500px] flex flex-grow-0 relative rounded-md overflow-hidden">
              <Image
                fill={true}
                src={blog.img}
                alt=""
                className="object-cover"
              />
            </div>
            <div className="flex  flex-col gap-5 justify-center w-[100vw]">
              <h1 className="text-4xl font-bold ">{blog.title}.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio sunt, rem impedit consequuntur minima consequatur. Veritatis, quae vel. Quae minus ipsam praesentium distinctio eos maxime quidem, odio suscipit delectus.
              </p>
            </div>
          </Link>
        ))
      }
      
    </div>
  );
};

export default Blog;
