import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-[85vw]  h-[45vh] relative rounded-xl overflow-hidden">
        <Image
          fill={true}
          className="object-cover grayscale"
          src="https://images.pexels.com/photos/8251161/pexels-photo-8251161.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="AboutImage"
        />
        <div className="absolute bottom-2 left-3 px-4 py-1.5 flex flex-col justify-center rounded-xl z-10 bg-secondary">
          <h1 className="font-semibold text-lg">Digital Storyteller</h1>
          <p className="text-sm">Handcrafting award winning digital experiences</p>
        </div>
      </div>
      <div className="my-5 flex w-full justify-between gap-20  ">
        <div className="flex-1 flex-wrap">
          <h1 className="text-3xl font-bold title py-3 text-center">Who are we?</h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            officia repudiandae, illum corrupti error voluptatem id blanditiis
            quis corporis veritatis molestias numquam, voluptates inventore? Ad
            atque odit et, perspiciatis repellendus nobis.
            <br />
            <br />
            Asperiores accusantium corrupti, quos recusandae vero provident
            molestiae est quod? Quidem modi dolorum assumenda, quas, corporis
            facere itaque animi est corrupti nostrum asperiores sapiente illo
            ducimus possimus rem harum quaerat esse omnis! Fugiat
            necessitatibus, nostrum, hic,
            <br />
            <br />
            quidem quibusdam sint ullam aspernatur saepe quia facilis
            repellendus vel inventore quos aperiam.
          </p>
        </div>
        <div className="flex-1 ">
          <h1 className="text-3xl font-bold title py-3 text-center ">What we do.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nam tempore ratione laudantium minima nemo, quaerat facere in
            officiis est nihil sed, repellat laboriosam vitae eius soluta saepe
            non magni!
            <ul className="py-4 px-8">
              <li className=" list-disc py-2">Creative illustrations</li>
              <li className=" list-disc py-2">Dynamic  </li>
              <li className="list-disc py-2">Lorem ipsum dolor sit amet.</li>
              
            </ul>
            <button className="py-2 rounded-xl text-slate-950 mx-4 active:scale-110 hover:translate-x-2 duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-max">
                <Link href='/contacts'>Contact</Link></button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
