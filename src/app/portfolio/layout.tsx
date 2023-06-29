import React from 'react'

const PortfolioLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-6xl font-bold title'>Our Work</h1>
        {children}
    </div>
  )
}

export default PortfolioLayout