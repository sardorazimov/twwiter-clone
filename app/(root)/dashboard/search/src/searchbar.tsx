import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"


const Searchbar = () => {
  return (
    <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
     
     <div className="lg:col-span-3 space-y-4">
       
       <section>
         <h2 className="text-xl font-bold mb-4">İş dünyası haberleri</h2>
         <Card className="bg-gray-900 border-white/5 p-4">
           <div className="flex gap-3">
             <div className="w-12 h-12 rounded-full bg-white/5" />
             <div>
               <div className="flex items-center gap-2">
                 <span className="font-bold">Utku Altunöz</span>
                 <span className="text-blue-400">✓</span>
                 <span className="text-gray-500">@utkualtunoz · 9s</span>
               </div>
               <p className="text-sm mt-1">
                 Davranışsal ekonomi ile alakalı 1 kitap, birçok bildiri ve makale yazmış bir akademisyen olarak çorbanın 100 TL...
               </p>
             </div>
           </div>
         </Card>
       </section>
     </div>

     {/* Sidebar */}
     <div className="lg:col-span-1">
       <Card className=" border-white/5 p-4">
         <h2 className="text-xl font-bold mb-4">Kimi takip etmeli</h2>
         <div className="space-y-4">
           {['izmirgibyiz', 'Göztepe Spor Kulübü', 'İzmir\'i Keşfet'].map((account) => (
             <div key={account} className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white/5" />
                 <div>
                   <div className="font-bold">{account}</div>
                   <div className="text-gray-500 text-sm">@{account.toLowerCase().replace(/\s+/g, '')}</div>
                 </div>
               </div>
               <Button variant="outline" className="rounded-full">
                 Takip et
               </Button>
             </div>
           ))}
         </div>
       </Card>
     </div>
   </div>
    </div>
  )
}

export default Searchbar