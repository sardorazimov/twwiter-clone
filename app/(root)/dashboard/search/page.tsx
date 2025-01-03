import { Search } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import React from 'react'
import { PostList } from './src/post-list'
import Asidesidebar from '@/components/shared/asidesidebar'
import Newlist from './src/newlist'

const page = () => {
  return (
    <main className='w-full h-full flex '>
     <div className='lg:w-[700px] w-full min-h-screen border-r border flex flex-col'>
     <div className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="search"
            placeholder="Ara"
            className="w-full bg-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className='flex   mt-3 lg:mx-20 mx-0'>
        <Tabs defaultValue="sana-ozel" className="w-full">
        <TabsList className="w-full justify-start bg-white/10">
          <TabsTrigger value="sana-ozel" className="text-sm">
            Sana Özel
          </TabsTrigger>
          <TabsTrigger value="gundemdekiler" className="text-sm">
            Gündemdekiler
          </TabsTrigger>
          <TabsTrigger value="haberler" className="text-sm">
            Haberler
          </TabsTrigger>
          <TabsTrigger value="spor" className="text-sm">
            Spor
          </TabsTrigger>
          <TabsTrigger value="eglence" className="text-sm">
            Eğlence
          </TabsTrigger>
        </TabsList>
      </Tabs>
        </div>
      </div>
      <Newlist/>
      <PostList/>
     </div>
     <div className='lg:flex fixed lg:pl-[700px] hidden'>
      <div className='sticky'>
        <Asidesidebar/>
      </div>
     </div>
     <main>
    
     </main>
    </main>
  )
}

export default page