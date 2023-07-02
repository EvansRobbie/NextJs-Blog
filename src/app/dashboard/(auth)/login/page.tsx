"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(email, password, username)
    try {
      signIn("credentials", {
        email,
        password,
      });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };
  return (
    <div className="flex w-full h-full items-center gap-5 flex-col justify-center ">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="py-2 rounded-xl text-slate-950 active:scale-110  duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-full">
          Login
        </button>
      </form>
      {err && "something went wrong"}
      <div>
        <button onClick={() => signIn("google")}>Login With Google</button>
      </div>
      <Link href="/dashboard/login">Create a new Account</Link>
    </div>
  );
};

export default Login;
