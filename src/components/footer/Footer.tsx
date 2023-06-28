// 'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    // console.log('first')
  return (
    <footer className='flex justify-between items-center h-14'>
        <div>Robbievans. All Rights reserved</div>
        <div className='flex gap-4'>
            <Link href='/' className='relative w-10 h-10'>
                  <Image fill={true} className='opacity-60' src="/3.png"  alt='twitter'/>

            </Link>
            <Link href='/' className='relative w-10 h-10'>
                  <Image fill={true} className='opacity-60' src="/4.png"  alt='youtube'/>

            </Link>
            <Link href='/' className='relative w-10 h-10'>
                  <Image fill={true} className='opacity-60' src="/instagram.png"  alt='instagram'/>

            </Link>
            <Link href='/' className='relative w-10 h-10'>
                  <Image fill={true} className='opacity-60' src="/facebook.png"  alt='instagram'/>

            </Link>
        </div>
    </footer>
  )
}

export default Footer