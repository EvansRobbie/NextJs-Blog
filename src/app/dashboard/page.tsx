"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import React from 'react'
import Image from 'next/image'

const Dashboard = () => {
  const session = useSession()
  // console.log(session)
  const router = useRouter()
  const fetcher = (...args:any) => fetch(args).then((res) => res.json())
  const {data, isLoading, error, mutate} = useSWR(
    `/api/posts?username=${session.data?.user?.email}`, fetcher
  )
  // console.log(data)
  if (session.status === "loading"){
    return <p>Loading...</p>
  }
  if (session.status === "unauthenticated"){
    router.push('/dashboard/login')
  }
  // if (session.status === "authenticated"){
    // router.push('/dashboard/login')
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const target = e.target as HTMLFormElement;
        const title = (target[0] as HTMLInputElement).value;
        const desc = (target[1] as HTMLInputElement).value;
        const img = (target[2] as HTMLInputElement).value;
        const content = (target[3] as HTMLInputElement).value;

        try {
          await fetch('/api/posts',{
            method:"POST",
            body: JSON.stringify({
              title,
              desc,
              img,
              content,
              username:session.data?.user?.email
            })
            
          })
          mutate()
          target.reset()
        } catch (error) {
          
        }
    }

    const handleDelete = async (id:string) =>{
      try{
        await fetch(`/api/posts/${id}`, {
          method: "DELETE"
        })
        mutate()
      }catch(e){
        console.log(e)
      }
    }
    return (
      <div className='flex gap-5 justify-between'>
          <div className='flex-1 flex flex-col gap-4 '>
            {isLoading ? "Loading" : data?.map((posts:any)=>(
              <div className='flex items-center justify-evenly w-full' key={posts._id}>
                <div className="w-[250px] h-[100px] relative">
                  <Image className='object-cover' fill={true} src={posts.img} alt=''/>
                </div>
                <h2 className="">{posts.title}</h2>
                <span onClick={()=>handleDelete(posts._id)} className='text-2xl cursor-pointer text-red-500'>X</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-5'>
            <h1 className='text-2xl title'>Add new post</h1>
            <input className='' type="text" placeholder='Title' required />
            <input type="text" placeholder='Description' required />
            {/* <div className="bg-transparent cursor-pointer border-2 border-gray-700 rounded-md px-4 py-1.5 outline-none"> */}
            <input type="text" className='' placeholder='Image' required />
            {/* <span className='text-gray-400'>Cover Image</span>

            </div> */}
            <textarea placeholder='Your content' required/>
            <button className='py-2 rounded-xl text-slate-950 active:scale-110  duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-full'>Send</button>
          </form>
      </div>
    )
  
}

export default Dashboard