"use client"
import Link from "next/link";
import React from "react";
import { links } from "@/app/portfolio/Data";
import ToggleButton from "../toggleButton/ToggleButton";
import { useThemeContext } from "@/context/ThemeContext";
import { signOut } from "next-auth/react";
interface linkProps {
  id: number;
  title: string;
  url: string;
}

const Navbar = () => {
  const {mode} = useThemeContext()
  // console.log(mode)
  return (
    <nav className={` ${mode === 'light' ? 'light' : 'dark'} w-full h-20 duration-500 ease-in flex items-center justify-between`}>
      <Link className="font-bold font-lg" href={"/"}>NextBlog</Link>
      <div className="flex gap-4 items-center">
        <ToggleButton/>
        {links.map((link: linkProps) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      <button className="px-4 py-1.5 rounded-xl active:scale-105 bg-secondary text-center" onClick={()=>signOut()}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
