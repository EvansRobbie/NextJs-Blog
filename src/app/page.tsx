import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-full h-full items-center gap-20">
      <div className=' flex flex-col gap-10 flex-1'>
        <h1 className='text-6xl font-extrabold   title'>Better Design For Your digital products.</h1>
        <p className='text-xl font-semibold'>Turning your idea into Reality. We bring together the teams from the global tech industries</p>
        <button className='py-2 rounded-xl text-slate-950 active:scale-110 hover:translate-x-2 duration-300 ease-in shadow-2xl shadow-secondary hover:shadow-slate-400 px-4 bg-secondary max-w-max'>See our work</button>
      </div>
      <div className='w-[70vw] h-[70vh] flex relative flex-1'>

      <Image fill={true} className='object-cover px-4' src='/hero.png' alt='homepage'/>
      </div>
    </main>
  )
}
