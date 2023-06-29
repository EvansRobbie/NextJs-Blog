import Image from "next/image";
import React from "react";

const Category = ({ params }: { params: { category: string } }) => {
  // console.log(params)
  return (
    <div className="">
      <h1 className="text-secondary text-lg capitalize py-2">{params.category}</h1>
      <div className="item">
        <div className="flex-1 flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">Test</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            inventore, corporis magnam, velit esse impedit amet dolore
            perspiciatis quibusdam enim, debitis soluta? Nostrum, enim. Dolorum
            est facere libero repellendus dolores.
          </p>
          <button className="py-2 rounded-xl text-slate-950 active:scale-110 hover:translate-x-2 duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-max">Test</button>
        </div>
        <div className="flex-1  h-[400px] rounded-xl overflow-hidden relative">
          <Image fill={true} src="https://images.pexels.com/photos/68824/pexels-photo-68824.jpeg?auto=compress&cs=tinysrgb&w=600" alt={`/${params.category}`} />
        </div>
      </div>

      <div className="item">
        <div className="flex-1 flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">Test</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            inventore, corporis magnam, velit esse impedit amet dolore
            perspiciatis quibusdam enim, debitis soluta? Nostrum, enim. Dolorum
            est facere libero repellendus dolores.
          </p>
          <button className="py-2 rounded-xl text-slate-950 active:scale-110 hover:translate-x-2 duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-max">Test</button>
        </div>
        <div className="flex-1  h-[400px] rounded-xl overflow-hidden relative">
          <Image fill={true} src="https://images.pexels.com/photos/68824/pexels-photo-68824.jpeg?auto=compress&cs=tinysrgb&w=600" alt={`/${params.category}`} />
        </div>
      </div>
      <div className="item">
        <div className="flex-1 flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">Test</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            inventore, corporis magnam, velit esse impedit amet dolore
            perspiciatis quibusdam enim, debitis soluta? Nostrum, enim. Dolorum
            est facere libero repellendus dolores.
          </p>
          <button className="py-2 rounded-xl text-slate-950 active:scale-110 hover:translate-x-2 duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-max">Test</button>
        </div>
        <div className="flex-1  h-[400px] rounded-xl overflow-hidden relative">
          <Image fill={true} src="https://images.pexels.com/photos/68824/pexels-photo-68824.jpeg?auto=compress&cs=tinysrgb&w=600" alt={`/${params.category}`} />
        </div>
      </div>
    </div>
  );
};

export default Category;
