import Asidesidebar from '@/components/shared/asidesidebar'
import React from 'react'
import Header from './src/Header'
import OverflowNav from './src/overlof-nav'

import TwitterPost from './src/bookmarks'

const items = [
    { label: "Oyun", href: "#" },
    { label: "Siyaset", href: "#" },
    { label: "İşletme", href: "#" },
    { label: "Kültür", href: "#" },
    { label: "Bilim", href: "#" },
    { label: "Yemek", href: "#" },
    { label: "Hayva", href: "#" },
    // Add more items to demonstrate overflow
    { label: "Teknoloji", href: "#" },
    { label: "Spor", href: "#" },
    { label: "Ai", href: "#" },

]
const page = () => {
  return (
    <div className='w-full min-h-screen flex'>
     <div className='lg:w-[700px] w-full  border-white/10'>
     <header className=' fixed h-24 border-b lg:w-[700xp] w-full border-white/10'>
      <Header/>
     <div className=' '> 
      <OverflowNav items={items} />
    </div>
     </header>
      <TwitterPost/>
     </div>
     <div className=' lg:flex hidden fixed lg:pl-[700px] border-l'>
        <Asidesidebar/>
     </div>
    </div>
  )
}

export default page