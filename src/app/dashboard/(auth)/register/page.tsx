"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register = () => {
  const router = useRouter()
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<boolean>(false)
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      // console.log(email, password, username)
      try {
        const res = await fetch('/api/auth/register', {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password
          })
        })
          res.status === 201 && router.push('/dashboard/login?success=Account has been created')
          // setUsername('')
          // setEmail('')
          // setPassword('')
          // const response = await res.json()
          // console.log(response)
      
      } catch (error) {
        console.log(error)
        setErr(true)
      }
  }
  return (
    <div className='flex w-full h-full items-center gap-5 flex-col justify-center '>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder='Username' required/>
          <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder='Email' required />
          <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder='Password'  required/>
          <button className='py-2 rounded-xl text-slate-950 active:scale-110  duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-full'>Register</button>
      </form>
      {err && "something went wrong"}
      <Link href='/dashboard/login'>Login with an existing Account</Link>
    </div>
  )
}

export default Register