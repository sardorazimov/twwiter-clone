import { ScrollArea } from "@/components/ui/scroll-area"
import { MailCheck, Search, Settings } from "lucide-react"
import List from "./list"


const Messagelist = () => {
  return (
    <ScrollArea className="lg:w-[500px] w-full min-h-screen border-r">
      <div className="sticky  w-full mt-2 mx-auto flex  justify-between">
       <div>
        <h1 className="lg:pl-4 font-medium text-xl">
            Messages
        </h1>
       </div>
       <div className="flex gap-2 lg:pr-4">
        <Settings/>
         <MailCheck/>
       </div>
      </div>
      <div className="relative max-w-xl mt-2 mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="search"
            placeholder="Ara"
            className="w-full bg-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* Messages */}
        <div className="mt-5">
            {/* Message 1 */}
   <List/>
            {/* Message 2 */}
        </div>
    </ScrollArea>
  )
}

export default Messagelist