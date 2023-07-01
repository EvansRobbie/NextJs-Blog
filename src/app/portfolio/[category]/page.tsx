import Image from "next/image";
import React from "react";
import { Items } from "./data";
import { notFound } from "next/navigation";

interface ItemsProp {
  id: number;
  title: string;
  description: string;
  image: string;
}
const getData  = (cat:any) =>{
  const data = Items[cat] 

  if (data) return data;

  return notFound()
}
const Category = ({ params:{category} }: { params: { category: string } }) => {
  // console.log(params)
  const data = getData(category)
  return (
    <div className="">
      <h1 className="text-secondary text-lg capitalize py-2">{category}</h1>
      {data.map((category:ItemsProp)=>(
          <div className="item" key={category.id}>
            <div className="flex-1 flex flex-col justify-center gap-5">
              <h1 className="text-4xl font-bold">{category.title}</h1>
              <p className="">
               {category.description}
              </p>
              <button className="py-2 rounded-xl text-slate-950 active:scale-110 hover:translate-x-2 duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-max">Test</button>
            </div>
            <div className="flex-1 h-[400px] rounded-xl overflow-hidden relative">
              <Image className="grayscale" fill={true} src={category.image} alt={`/${category.title}`} />
            </div>
          </div>
      ))}

     
    </div>
  );
};

export default Category;
