import Link from 'next/link'
import React from 'react'
import { portfolioData } from '@/utils/data/Data'

const Portfolio = () => {
  return (
    <div>
      <h1 className='py-4 text-lg mx-4'>Choose A gallery</h1> 
      <div className='flex gap-10'>
        {
          portfolioData.map((portfolio) =>(
          <Link key={portfolio.id} style={{
            backgroundImage: `url(${portfolio.image})`}} className='relative group rounded-xl bg-cover  border-4 border-gray-600 h-[350px] w-[300px] ' href={portfolio.url}>
              <span className='absolute bottom-5 right-5 !text-slate-200 text-2xl group-hover:text-secondary duration-500 ease-in font-bold capitalize'>{portfolio.title}</span>
          </Link>

          ))
        } 
      </div>
    </div>
  )
}

export default Portfolio