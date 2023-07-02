import React from 'react'

export const metadata = {
  title: 'portfolio',
  description: 'Our work',
}

const PortfolioLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-6xl font-bold title'>Our Work</h1>
        {children}
    </div>
  )
}

export default PortfolioLayout