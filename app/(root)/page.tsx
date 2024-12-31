/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


const page = () => {
  const router = useRouter()
  return (
    <div className='lg:pl-72 lg:pt-72'>
      <div className='grid xl:grid-cols-2 gap-x-10  md:gri-cols-1 sm:grid-cols-1 sm:gap-y-10'>
        <div className='lg:flex hidden'>
         <img  src={'/logos.svg'}  alt=''/>
        </div>
        <div>
          <h1 className='text-4xl font-bold text-gray-200'>Twit</h1>
          <p className='text-2xl text-gray-600'>
            A simple, decentralized microblogging platform
          </p>
          <div className='flex gap-x-2'>
            <a onClick={() => router.push('/dashboard')}
             href='#' className='px-3 py-2 text-sm text-gray-200 hover:text-gray-700'>
              Sign up
            </a>
            <a href='#' className='px-3 py-2 text-sm text-gray-200 hover:text-gray-700'>
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page