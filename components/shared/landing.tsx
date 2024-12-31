import { Search, MessageCircle, Heart, BarChart2, Bookmark, Share2, MoreHorizontal, BadgeCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Asidesidebar from './asidesidebar'

export default function TwitterInterface() {
  return (
    <div className="min-h-screen w-full lg:flex hidden text-white">
      <div className=" mx-auto  gap-4">
        {/* Main Content */}
        <main className="md:col-span-8  border-white/10">
          {/* Premium Banner */}
          <div className="p-4 border-b border-white/10">
            <div className="space-y-4">
              <div className="flex space-x-4 text-gray-400">
                <button className="text-white font-bold">Sana özel</button>
                <button>Takip edilenler</button>
                <button className="ml-auto">
                  <MoreHorizontal />
                </button>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Premium+ ile reklamsız kullan</h2>
                <p className="text-gray-400">X'te tamamen reklamsız, daha akıcı bir deneyim için hesabını yükselt.</p>
                <Button className="rounded-full bg-white text-black hover:bg-gray-200">
                  Abone Ol
                </Button>
              </div>
            </div>
          </div>

          {/* Developer Tweet */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white/10 rounded-full" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-1">
                  <span className="font-bold">Developers</span>
                  <BadgeCheck className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-500">@XDevelopers</span>
                  <MoreHorizontal className="ml-auto" />
                </div>
                <div className="space-y-3">
                  <p>Calling all developers! 📢</p>
                  <p>Innovate with our real-time and historical data on the X API.</p>
                  <p>Get started with Pro👇</p>
                  <Card className="bg-[#16181c] border-0 overflow-hidden rounded-xl">
                    <img 
                      src="/landing.png"
                      alt="API Promotion"
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xl font-bold">Build what's next with our API</p>
                      <p className="text-gray-400">@XDevelopers</p>
                    </div>
                  </Card>
                </div>
                <div className="flex justify-between pt-3 text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-blue-500">
                    <MessageCircle className="w-4 h-4" />
                    <span>1B</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-green-500">
                    <Share2 className="w-4 h-4" />
                    <span>6B</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-pink-500">
                    <Heart className="w-4 h-4" />
                    <span>38B</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-500">
                    <BarChart2 className="w-4 h-4" />
                    <span>124 Mn</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-500">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar */}
         <div className='mx:10 lg:pl-10'>
            <div className='fixed '>
            </div>
         </div>
      </div>
    </div>
  )
}

