import Asidesidebar from '@/components/shared/asidesidebar'
import TwitterInterface from '@/components/shared/landing'
import React from 'react'

const page = () => {
  return (
    <div className='h-full'>
      <div className='grid grid-cols-2 gap-x-10 xl:grid-cols-2 '>
        <div className='w-[650px]  border-r flex flex-col h-full'>
          <div className='w-full h-full border-r'>
            <TwitterInterface />
          </div>
        </div>
        <div className='lg:pl-32'>
          <Asidesidebar/>
        </div>
      </div>
    </div>
  )
}

export default page