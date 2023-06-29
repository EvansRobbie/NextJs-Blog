import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <h1>Choose A gallery</h1> 
      <div>
        <Link className='' href='/portfolio/illustrations'>
            <span className=''>illustrations</span>
        </Link>
        <Link className='' href='/portfolio/websites'>
            <span className=''>websites</span>
        </Link>
        <Link className='' href='/portfolio/applications'>
            <span className=''>applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio