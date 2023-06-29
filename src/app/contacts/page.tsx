import Image from 'next/image'
import React from 'react'

const Contacts = () => {
  return (
    <div className=' w-full h-full'>
      <h1 className='text-center text-4xl capitalize font-bold title py-6'>Let's keep in touch</h1>
      <div className='flex items-center justify-between gap-20'>

        <div className='w-w] h-[500px] animate-image relative flex-1 '>
          <Image fill={true} className='' src='/contact.png' alt='/ContactsPage'/>
        </div>
        <form className='flex-1 flex flex-col gap-4' >
          <input type="text" placeholder='Name'  required/>
          <input type="email" placeholder='Email' required />
          <textarea className='h-32' placeholder='Message..' />
          <button className='py-2 rounded-xl mx-auto text-slate-950 active:scale-110 hover:translate-x-2 duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-max'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts