import React from 'react'
import { Card } from '../ui/card'
import { BadgeCheck, MoreHorizontal, Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const Asidesidebar = () => {
  return (
    <div className='fixed lg:flex hidden '>
       <aside className="md:col-span-4 space-y-4 p-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input 
              className=" border-white/10 pl-10 rounded-full text-white placeholder:text-gray-500"
              placeholder="Ara"
            />
          </div>

          {/* Trends */}
          <Card className=" bg-transparent border-white/10 p-4">
            <h2 className="text-xl font-bold mb-4">Neler oluyor?</h2>
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Promoted by Hipodrom.com</span>
                  <MoreHorizontal className="w-4 h-4 text-gray-500" />
                </div>
                <p className="font-bold">#Hipodromcom2025</p>
                <p className="text-sm text-gray-500">At yarışı burada oynanır!</p>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Eğlence · Gündemdekiler</span>
                  <MoreHorizontal className="w-4 h-4 text-gray-500" />
                </div>
                <p className="font-bold">Beyaz Show</p>
                <p className="text-sm text-gray-500">1.530 gönderi</p>
              </div>
              <Button variant="link" className="text-blue-500 p-0">
                Daha fazla göster
              </Button>
            </div>
          </Card>

          {/* Who to follow */}
          <Card className=" border-white/10 bg-transparent p-4">
            <h2 className="text-xl font-bold mb-4">Kimi takip etmeli</h2>
            <div className="space-y-4">
              {['Haluk Levent', 'izmirgibiyiz', 'İzmir Büyükşehir Bel'].map((name, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full" />
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="font-bold">{name}</span>
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-500">@{name.toLowerCase().replace(/\s+/g, '')}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-full">
                    Takip et
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </aside>
    </div>
  )
}

export default Asidesidebar