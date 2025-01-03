import { ArrowLeft, Search, Users } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
     <div className="flex justify-between items-center h-12  text-white px-6">
        <div className="flex  space-x-2">
          <span className="font-bold flex">
            <ArrowLeft/>
            Explore Post 
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm">
            <Search/>
          </button>
          <button className="text-sm  text-primary hover:text-white">
            <Users/>
          </button>
        </div>
     </div>
    </div>
  )
}

export default Header