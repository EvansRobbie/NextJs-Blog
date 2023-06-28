"use client"
import Link from "next/link";
import React from "react";
import { links } from "@/utils/data/Data";
interface linkProps {
  id: number;
  title: string;
  url: string;
}

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between">
      <Link className="font-bold font-lg" href={"/"}>NextBlog</Link>
      <div className="flex gap-4 items-center">
        {links.map((link: linkProps) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      <button className="px-4 py-1.5 rounded-xl active:scale-105 bg-secondary text-center" onClick={()=> console.log("logged out")}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
